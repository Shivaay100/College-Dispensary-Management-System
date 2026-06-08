const jwt = require('jsonwebtoken');

const UserModels = require('../Models/user');

exports.studentAuth = async (req, res, next) => {
    try {
        
        const token = req.cookies.token;
        if(token){
            const decode = jwt.verify(token, "Its_My_Secret_Key");
            req.user = await UserModels.findById(decode.userId).select("-password");
            next();

        }else{
            return res.status(401).json({ error: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModels.findById(decoded.userId);

    } catch (err) {
        console.log(err);
        return res.status(401).json({ error: "Unauthorized" });
    }

}


exports.adminFacultyAuth = async (req, res, next) => {
    try {
        
        const token = req.cookies.token;
        if(token){
            const decode = jwt.verify(token, "Its_My_Secret_Key");
            req.user = await UserModels.findById(decode.userId).select("-password");

            if(req?.user?.role === "student" ){
                throw new Error("you don't have access to this resource");
            }
            next();

        }else{
            return res.status(401).json({ error: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModels.findById(decoded.userId);

    } catch (err) {
        console.log(err);
        return res.status(401).json({ error: "Unauthorized" });
    }

}