const jwt = require("jsonwebtoken")
module.exports = (req,res, next)=>{
 
    try{
        
        const token = req.headers.authorization.split(" ")[1];

        const decodedtoken = jwt.verify(token, "scrtvw");
        console.log("decoded==========>",decodedtoken);

        req.userdata={loginid:decodedtoken.loginid,name:decodedtoken.name}
        next();
        
     }catch(error){
        res.status(400).json({
            message:"auth failed"
        })
    }
}