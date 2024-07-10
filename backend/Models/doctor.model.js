const mongoose = require("mongoose");
const DocSchema = new mongoose.Schema({
    username : {
        type : String,
        required:true
    } , 
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        enum  :['Male' , 'Female']
    },
    speciality : {
        type : String,
        default :""
    },
    price : {
        type : Number,
        default : 0
    },
    bio : {
        type : String,
        default :""
    },
    intro : {
        type : String,
        default:""
    },
    rib : {
        type : String,
        default :""
    },
    photo : {
        type : String,
        default :""
    },
    reviews : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Review"
    }],
    averageRating : {
        type : Number,
        default:0
    },
    reviewsNumber : {
        type : Number,
        default : 0
    },
    starsNumber : {
        type : Number,
        default : 0
    },
    Approved : {
        type : Boolean,
        default : false
    }
});

const Doctor = mongoose.model('Doctor' , DocSchema);
module.exports = Doctor;