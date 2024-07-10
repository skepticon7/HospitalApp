const Time = require("../Models/time.model.js");
const PostTime = async (req,res)=>{
    const time = req.body.time;
    try {
        if(time._id){
            await Time.findByIdAndUpdate(time._id, {StartTimeFM : time.StartTimeFM , EndTimeFM : time.EndTimeFM , StartTimeSat : time.StartTimeSat  , EndTimeSat : time.EndTimeSat }).then(()=>{
                return res.status(200).json({msg : "successfully updated time"});
            }).catch(e=>{
                return res.status(500).json({error : "error updating time"})
            });
        }else {
            const newTime = new Time({
                Doctor : req.user._id,
                StartTimeFM:time.StartTimeFM,
                EndTimeFM : time.EndTimeFM,
                StartTimeSat : time.StartTimeSat,
                EndTimeSat : time.EndTimeSat
            });
            newTime.save().then(()=>{
                return res.status(200).json({msg : "time added"});
            });
        }
        
    } catch (error) {
        console.log("error in post time middlware");
        return res.status(500).json({error:"Internal server error"});
    }
}

const GetTime = async (req,res)=>{
    const DoctorId = req.user._id;
    try {
        const time = await Time.findOne({Doctor : DoctorId});
            return res.status(200).json(time);
    } catch (error) {
        console.log("error in get time controller " + error.message);
        return res.status(500).json({error:"internal server error"});
    }
}

module.exports = {PostTime , GetTime}