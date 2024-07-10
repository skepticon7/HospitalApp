const Payment = require("../Models/payment.model.js")
const PostPayment = async (req,res)=>{
    const {price , doctorId } = req.body;
    try {
        const newPayment = new Payment({
            Doctor : doctorId,
            Patient:req.user._id,
            Price : price
        });
        newPayment.save().then(()=>{
            return res.status(200).json({msg : "payment added"});
        });
    } catch (error) {
        console.log("error in post payment middlware");
        return res.status(500).json({error:"Internal server error"});
    }
}

const GetPayment = async (req,res)=>{
    
    const type = req.query.type;
    if(type==="Patient") {
        try {
            const Pay = await Payment.find({Patient : req.user._id}).populate('Doctor');
            return res.status(200).json(Pay);
        } catch (error) {
            console.log("error in get experience controller " + error);
            return res.status(500).json({error:"internal server error"});
        }
    }else{
        try {
            const Pay = await Payment.find({Doctor : req.user._id}).populate('Patient');

            return res.status(200).json(Pay);
            
        } catch (error) {
            console.log("error in get experience controller " + error);
            return res.status(500).json({error:"internal server error"});
        }
    }

}

module.exports = {PostPayment , GetPayment}