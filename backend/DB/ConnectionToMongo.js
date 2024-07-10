const mongoose = require("mongoose");
const ConnectToDb = async (req,res) =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("successfully connected to mongoDB");
    } catch (error) {
        console.log("error in connection to mongodDB" , error.message);
    }
}

module.exports = ConnectToDb;