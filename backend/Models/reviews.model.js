const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({
    Patient : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Patient'
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
    StarReview : {
        type : Number,
        required : true
    },
    Description : {
        type : String,
        required:true
    }
});

const Review = mongoose.model("Review",reviewSchema);
module.exports = Review;