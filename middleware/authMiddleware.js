const jwt = require('jsonwebtoken');

const authMiddleware = (req,res, next)=> {
    const token =req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({message: "Didn't find any token"});

    try{
        const decode =  jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();
    }catch(err){
        res.status(403).json({message:"Wrong Token"});
    }
};

module.exports = authMiddleware;