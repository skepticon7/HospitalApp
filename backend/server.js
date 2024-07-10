const express = require("express");
const app = express();
const dotenv = require("dotenv");

// Routes
const AuthRouter = require("./Routes/auth.routes.js");
const AppointmentRouter = require("./Routes/Appointments.routes.js");
const EducationRouter = require("./Routes/education.routes.js");
const ExperienceRouter = require("./Routes/experience.routes.js");
const PaymentRouter = require("./Routes/Payment.routes.js");
const TimeRouter = require("./Routes/time.routes.js");
const ReviewRouter = require("./Routes/Reviews.routes.js");
const UserRouter = require("./Routes/user.routes.js");
const updateDocRouter = require("./Routes/DoctorSettings.routes.js");
const updatePatientRouter = require("./Routes/PatientSettings.routes.js");
// connection to mongoDB
const ConnectToDb = require("./DB/ConnectionToMongo.js");


const cookieParser = require("cookie-parser"); 



dotenv.config({path:"../.env"});


const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("mama");
})

app.use(express.json());
app.use(cookieParser());
app.use("/api",AuthRouter);
app.use("/api",AppointmentRouter);
app.use("/api",EducationRouter);
app.use("/api",ExperienceRouter);
app.use("/api",PaymentRouter);
app.use("/api",TimeRouter);
app.use("/api",ReviewRouter);
app.use("/api",UserRouter);
app.use("/api",updateDocRouter);
app.use("/api",updatePatientRouter);
app.listen(PORT,()=>{
    console.log("app running on port " + PORT);
    ConnectToDb();
})