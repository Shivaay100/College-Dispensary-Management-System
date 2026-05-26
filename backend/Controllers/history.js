const HistoryModel = require("../Models/history");
const MedicineModel = require("../Models/medicine");

exports.addHistory = async (req, res) => {
    try {
        let { roll, student, medicines } = req.body;

        let medicineData = medicines.map((item) => {
            let { _id, name, requiredQuantity } = item;
            return { _id, name, requiredQuantity };
        });

        // FIX: Replaced .map() with for...of to correctly await database operations
        for (let item of medicineData) {
            let medicine = await MedicineModel.findById(item._id);
            if (medicine) {
                let leftQuantity = parseInt(medicine.quantity) - parseInt(item.requiredQuantity);
                medicine.quantity = leftQuantity.toString();
                await medicine.save();
            }
        }

        const addData = new HistoryModel({ roll, student, medicines: medicineData, addedBy: req.user._id });
        await addData.save();
        
        return res.status(200).json({
            message: "History Added Successfully",
            history: addData
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        });
    }
};

exports.getHistoryByDate = async (req, res) => {
    try {
        let { month, year } = req.query;
        const monthIndex = new Date(`${month} 1, ${year}`).getMonth(); 

        const startDate = new Date(year, monthIndex, 1); 
        const endDate = new Date(year, monthIndex + 1, 1);

        // FIX: Repaired syntax layout, typos (hostory -> history, stuent -> student), and sort object structure
        const history = await HistoryModel.find({
            createdAt: { 
                $gte: startDate, 
                $lt: endDate 
            }
        }).populate("student").sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Fetched Successfully",
            history
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        });
    }
};

exports.getStudentHistory = async (req, res) => {
    try {
        const { roll } = req.query;
        const history = await HistoryModel.find({ roll }).populate("student").sort({ createdAt: -1 });
        
        if (history.length === 0) {
            return res.status(400).json({
                error: "No History Found For This Student"
            });
        }
        
        return res.status(200).json({
            message: "History Fetched Successfully",
            history
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        });
    }
};