const express = require("express");
const router = express.Router();
const Authentication = require('../Authentication/auth');
const GallaryController = require('../Controllers/gallary');

router.post('/add',Authentication.adminFacultyAuth,GallaryController.addImage)
router.get('/get',GallaryController.getAllGallary);
router.delete('/delete/:id',Authentication.adminFacultyAuth,GallaryController.deleteImageById)

 
 
// Watch Video For FUll Code
 
 
  
 
 


module.exports = router;