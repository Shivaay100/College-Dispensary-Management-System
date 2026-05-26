const GallaryModal = require('../Models/gallary');

exports.addImage = async(req,res)=>{
    try{

        const {link} = req.body;
        const image = new GallaryModal({link,addedBy:req.user._id});
        await image.save();
        return res.status(200).json({
            message:"Image Added Successfully",
            image
        })

        


        // Watch Video For FUll Code








    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.getAllGallary = async(req,res)=>{
    try{

        const images = await GallaryModal.find();
        return res.status(200).json({
            message:"Images Fetched Successfully",
            images
        })

    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.deleteImageById = async(req,res)=>{
    try{
        const {id} = req.params;
        const image = await GallaryModal.findByIdAndDelete(id);
        if(image){
            return res.status(200).json({
                message:"Image Deleted Successfully"
            })
        }

        return res.status(400).json({
            error:"No Such Image Found"
        });
        


        // Watch Video For FUll Code







        

    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}