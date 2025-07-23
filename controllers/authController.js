const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const{name,phone,email,gender,password} = req.body;

    try {
        const exist = await User.findOne({email});
        if(exist) return res.status(400).json({message: "Email already registered"});
        const hashed = await bcrypt.hash(password,10);
        const newUser = await User.create({name, phone, email, gender, password: hashed});
        res.status(201).json({message:"Registration Successful"});
    } catch (err){
        res.status(500).json({message:"Server Error",error:err.message});
}
    
};

exports.login =  async (req,res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if(!user) return res.status(400).json({message:"No user found"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message:"Wrong Password!"})
        
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn: '7d'});

        res.json({message:"Login Successful",token});



    }catch (err){
        res.status(500).json({message: "Server Error",error: err.message});

    }

};
