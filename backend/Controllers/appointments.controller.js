const Doctor = require("../Models/doctor.model.js");
const Patient = require("../Models/doctor.model.js");
const Appointment = require("../Models/appointments.model.js");
const Payment = require("../Models/payment.model");

const MakeAppointment = async (req,res)=>{
    const PatientId = req.user._id;
    const {Doctor , Date, Time , Service} = req.body.AppInfo;

    try {
        const newAppointment = new Appointment({
            Patient : PatientId,
            Doctor : Doctor,
            Day: Date.Day,
            Month : Date.Month,
            Year : Date.Year,
            Time : Time,
            Service : Service
        });
        await newAppointment.save()
        return res.status(200).json(newAppointment);
    } catch (error) {
        console.log("error in make appointment controller " + error.message);
        return res.status(500).json({error : "Internal server error"});
    }
}

const GetAppointment = async (req,res)=>{
        const type = req.query.type;
        const user = req.user._id;
        if(type === "Patient") {
            const App = await Appointment.find({Patient : user}).populate('Doctor');
            return res.status(200).json(App);
        }else if(type === "Doctor") {
            const App = await Appointment.find({Doctor : user}).populate('Patient');
            return res.status(200).json(App);
        }
}

const AcceptAppointment = async (req,res)=>{
    const AppId = req.body.AppId;
    const PatientId = req.body.PatientId;
    const price = req.body.price;
        try {
            await Appointment.updateOne({ _id:AppId},{Status : "Confirmed"}).then(async ()=>{
                const newPayment = new Payment({
                    Doctor : req.user._id,
                    Patient:PatientId,
                    Price : price
                });
                await newPayment.save()
                return res.status(200).json({msg : "Appointment confirmed"});
            });

        } catch (error) {
            console.log("error in accept appointment controller");
            return res.status(500).json({error : "Internal server error"});
        }

    
}

const RejectAppointment = async (req,res)=>{


    const AppId = req.body.AppId;



        try {
            await Appointment.updateOne({_id:AppId},{Status : "Rejected"}).then(()=>{
                return res.status(200).json({msg : "Appointment Rejected"});
            });
        } catch (error) {
            console.log("error in reject appointment controller");
            return res.status(500).json({error : "Internal server error"});
        }

}

module.exports = {MakeAppointment , GetAppointment , AcceptAppointment , RejectAppointment}