const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema({
    Doctor : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Doctor'
    },
    Patient : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Patient'
    },
    Status : {
        type : String,
        required : true,
        default : "unpaid"
    },
    Price : {
        type : Number,
        required : true
    }
});

const Payment = mongoose.model("Payment" , PaymentSchema);
module.exports = Payment;