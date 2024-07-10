const Doctor = require("../Models/doctor.model.js")
const Review = require("../Models/reviews.model.js"); 
const PostReview = async (req,res)=>{
    const {Day , Month , Year ,StarReview , Rev , DoctorId} = req.body.ReviewInfo;
    try {
        
        const newReview = new Review({
            Patient : req.user._id,
            Day:Day,
            Month : Month,
            Year : Year,
            StarReview: StarReview,
            Description : Rev
        });
        await newReview.save();


        const p1 =  await Doctor.updateOne({_id:DoctorId},{$push : {reviews : newReview}});
        const p2 = await Doctor.updateOne({_id:DoctorId} , {$inc : {reviewsNumber: 1}});
        const p3 = await Doctor.updateOne({_id:DoctorId} , {$inc : {starsNumber:  StarReview}});
        const data = await Doctor.findById(DoctorId);

        const avg = data.starsNumber / data.reviewsNumber;
        const p4 = await Doctor.updateOne({_id:DoctorId } , {$set : {averageRating: parseInt(avg)}});
        await Promise.all([p1,p2,p3,p4])
        .then(()=>{
            return res.status(200).json({msg : "review added"})
        });
    } catch (error) {
        console.log("error in post review middlware" + error);
        return res.status(500).json({error:"Internal server error"});
    }
}

const GetReview = async (req,res)=>{
    const DoctorId = req.body.DoctorId ;
    try {
        const reviews = await Doctor.findById(DoctorId).populate("reviews");
        return res.status(500).json(reviews);
    } catch (error) {
        console.log("error in get review controller " + error.message);
        return res.status(500).json({error:"internal server error"});
    }
}

module.exports = {PostReview , GetReview}