const mongoose = require("mongoose");
const EducationSchema = new mongoose.Schema({
    Doctor : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Doctor'
    },
    StartEducation : {
        type : String,
        required : true
    },
    EndEducation : {
        type : String,
        required : true
    },
    Degree : {
        type : String,
        required : true
    },
    Location : {
        type : String,
        required : true
    }
});

const Education = mongoose.model("Education" , EducationSchema);
module.exports = Education;