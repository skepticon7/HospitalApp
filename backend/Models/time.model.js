const mongoose = require("mongoose");
const TimeSchema = new mongoose.Schema({
    Doctor : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Doctor'
    },
    StartTimeFM : {
        type : String,
        required : true
    },
    EndTimeFM : {
        type : String,
        required : true
    },
    StartTimeSat : {
        type : String,
        required : true
    },
    EndTimeSat : {
        type : String,
        required : true
    }
});

const Time = mongoose.model("Time" , TimeSchema);
module.exports = Time;