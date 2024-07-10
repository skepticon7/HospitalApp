const mongoose = require("mongoose");
const ExperienceSchema = new mongoose.Schema({
    Doctor : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Doctor'
    },
    StartExperience: {
        type : String,
        required : true
    },
    EndExperience : {
        type : String,
        required : true
    },
    Position : {
        type : String,
        required : true
    },
    Location : {
        type : String,
        required : true
    }
});

const Experience = mongoose.model("Experience" , ExperienceSchema);
module.exports = Experience;