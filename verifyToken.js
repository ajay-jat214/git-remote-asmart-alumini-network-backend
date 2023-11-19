const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req,res,next) => {
    let body="";
    req.on("data",(chunk)=>{
        body+=chunk.toString();
        const obj=JSON.parse(body);
        const token = obj.token || req.headers["x-access-token"] || req.query.token;

        if(!token){
            return res.status(403);
        }
        else{
            try{
                const decoded = jwt.verify(token,config.TOKEN_KEY);
                req.user=decoded;
            }catch(err){
                return res.status(401);
            }
        }
    });

    return next();
}

module.exports= verifyToken;