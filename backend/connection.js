const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://shivampaswan1215225_db_user:Xebrjk6PgaKHbnFk@cluster0.pepqakf.mongodb.net/?appName=Cluster0')
.then(res => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.log("Error connecting to MongoDB", err);
});