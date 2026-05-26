const express = require("express");
const router = express.Router();
const Authentication = require('../Authentication/auth');
const HospitalController = require('../Controllers/nearByHospital');

router.post("/add",Authentication.adminFacultyAuth,HospitalController.addNearByHospital)
router.get("/get",HospitalController.getHospitals);

router.put("/update/:id",Authentication.adminFacultyAuth,HospitalController.updateHospitalById)
router.delete("/delete/:id",Authentication.adminFacultyAuth,HospitalController.deleteHospitalById)
 
 
// Watch Video For FUll Code
 
 
  
 
 



module.exports = router;