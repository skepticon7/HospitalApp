const mongoose = require("mongoose");
const PatientSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    } , 
    password : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true,
        enum : ["Male" , "Female"]
    },
    photo : {
        type : String,
        default: ""
    }
});

const Patient = mongoose.model("Patient",PatientSchema);

module.exports = Patient;