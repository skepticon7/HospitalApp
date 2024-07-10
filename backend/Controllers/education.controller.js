const Education = require("../Models/education.model.js")
const PostEducation = async (req,res)=>{
    const education= req.body.education;
    
    try {
        if(education._id) {
            console.log(education);
            await Education.findByIdAndUpdate(education._id , {StartEducation : education.startDate , EndEducation : education.endDate , Degree:education.degree , Location : education.institute}).then(()=>{
                return res.status(200).json({msg : "education updated"});
            }).catch(e=>{
                return res.status(500).json({error:"education not updated"});
            })
        }else {
            const newEducation = new Education({
                Doctor : req.user._id,
                StartEducation:education.startDate,
                EndEducation : education.endDate,
                Degree : education.degree,
                Location: education.institute
            });
            newEducation.save().then(()=>{
                return res.status(200).json({msg : "education added"});
            });
        }
       
    } catch (error) {
        console.log("error in post education middlware" + error.message);
        return res.status(500).json({error:"Internal server error"});
    }
}

const GetEducation = async (req,res)=>{
    const DoctorId = req.user._id;
    try {
        const education = await Education.find({Doctor:DoctorId}).sort({StartEducation : 1});

        return res.status(200).json(education);
    } catch (error) {
        console.log("error in get education controller " + error.message);
        return res.status(500).json({error:"internal server error"});
    }
}

module.exports = {PostEducation , GetEducation}