const express = require("express");
const router = express.Router();
const Authentication = require('../Authentication/auth');
// Destructure the functions directly from your controller to make it cleaner
const { 
    addFacility, 
    updateFacility, 
    getAllFacility, // 👈 Fixed name to match your controller
    deleteFacility 
} = require('../Controllers/facility');

// Routes
router.post('/add', Authentication.adminFacultyAuth, addFacility);
router.put('/update/:id', Authentication.adminFacultyAuth, updateFacility);
router.get('/get', getAllFacility); // 👈 Fixed variable here
router.delete('/delete/:id', Authentication.adminFacultyAuth, deleteFacility);

module.exports = router;