const jwt = require("jsonwebtoken");
const GenTokenAndSetCookie=(userId , res)=>{
    const token = jwt.sign({userId},process.env.TOKEN_SIGNATURE , {expiresIn:"15d"});
    res.cookie("jsonwebtoken",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true
    })
}

module.exports = GenTokenAndSetCookie;