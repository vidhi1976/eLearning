import {User} from "../models/user.model.js"
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
// import generateToken from 
export const register = async (req,res)=>{
    try {
        const {name ,email ,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success : false,
                message:"All fields are required."
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exists with this email."
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)
        await User.create({
            name,
            email,
            password:hashedPassword
        })
        return res.status(201).json({
            success:true,
            message:"Account created successfully"
        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success:false,
            message:"Failed to Register"
        })
    }
}
export const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            res.status(400).json({
                success:false,
                message:"All fields are required."
            })
        }
        const user = await User.findOne({email});
        if(!user){
            res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            })
        }
        generateToken(res,user,`Welcome back , ${user.name}`)
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success:false,
            message:"Failed to Login"
        })
    }
}

export const logout= async(_,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success:false,
            message:"Failed to Logout"
        }) 
    }
}

export const getUserProfile = async(req,res)=>{
    try {
        
         const userId = req.id;
         const user = await User.findById(userId).select("-password");
         if(!user){
            res.status(404).json({
                message:"Profile not found",
                success:false
            })
         }
         return res.status(200).json({
            success:true,
            user
         })

    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success:false,
            message:"Failed to load user"
        }) 
    }
}

export const updateProfile = async(req,res)=>{
    try {
        const userId = req.id;
        const {name} = req.body;
        const profilePhoto = req.file;
        const user = await User.findById(userId);

        if(!user){
            res.status(404).json({
                message:"User not found",
                success:false
            })
        }
        const updatedData = {name,photoUrl,}
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success:false,
            message:"Failed to update profile"
        })
       
    }
}