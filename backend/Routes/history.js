const express = require("express");
const router = express.Router();
const Authentication = require('../Authentication/auth');

// Using destructuring ensures you catch missing/mismatched controller exports immediately
const { 
    addHistory, 
    getHistoryByDate, 
    getStudentHistory 
} = require('../Controllers/history');

// History Routes
router.post('/add', Authentication.adminFacultyAuth, addHistory);
router.get('/get-history', Authentication.adminFacultyAuth, getHistoryByDate); // Fixed: Matched name perfectly
router.get('/get', Authentication.adminFacultyAuth, getStudentHistory);

module.exports = router;