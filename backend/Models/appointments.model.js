const mongoose = require("mongoose");
const AppointmentSchema = new mongoose.Schema({
    Patient : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Patient'
    },
    Doctor : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Doctor'
    },
    Day : {
        type : String,
        required : true
    },
    Month : {
        type : String,
        required : true
    },
    Year : {
        type : String,
        required : true
    },
    Time : {
        type : String,
        required : true
    },
    Service : {
        type : String,
        required : true
    },
    Status : {
        type : String,
        required : true,
        default : "Requested"
    }
});

const Appointment = mongoose.model("Appointment" , AppointmentSchema);
module.exports = Appointment;