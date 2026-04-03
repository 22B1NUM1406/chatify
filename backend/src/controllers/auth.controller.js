import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const signup= async(req,res)=>{
    const {fullName, email,password}=req.body;
    if(!fullName||!email||!password){
        return res.status(400).json({message:"All fields are required!"});
    }
    if(password<6){
        return res.status(400).json({message:"Password must be at least 6 characters"});
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return res.status(400).json({message:"Invalide email format"});
    }
    //email davhatssan eseh
    const user= await User.findOne({email});
    if(user){return res.status(400).json({message:"Email is already exists"})};
    //password
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);

    const newUser=new User({
        fullName,
        email,
        password:hashedPassword
    });
}

export const login= async(req,res)=>{
    res.send("login page haha");
}

export const logout= async(req,res)=>{
    res.send("Logout page haha");
}