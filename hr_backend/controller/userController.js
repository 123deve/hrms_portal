// we are inserting data in mongo using this controller

import userModel from "../model/usermodel.js";

const createUser = async (req,res) => {
    try {
        const newUser = new userModel(req.body);
        const {email} = newUser;

        const userExist = await userModel.findOne({email});
        if(userExist){
            return res.status(404).json({message: "User already exists."})
        }
        const saveData = await newUser.save();
        res.status(200).json(saveData);
        // res.status(200).json({message: "User Created Successfully"});
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
    }
}

const getAllUser = async (req, res) => {
    try {
        const getUser = await userModel.find();
        if(!getUser || getUser.length === 0){
            res.status(404).json({message:"User data not found"})
        }
        res.status(200).json(getUser);
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
    }
}

const getUserById = async (req,res) =>{
    try {
        const id = req.params.id;
        const userExist = await userModel.findById(id);
        if(!userExist){
            res.status(404).json({message:"User data not found"})
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
    }
}

const update = async (req,res) => {
    try {
        const id = req.params.id;
        const userExist = await userModel.findById(id);
        if(!userExist){
            res.status(404).json({message:"User data not found"})
        }
        const updatedata = await userModel.findByIdAndUpdate(id, req.body, {
            new:true
        })
        // res.status(200).json(updatedata);
        res.status(200).json({message: "User Updated Successfully"});
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
    }
}

const deleteUser = async (req,res) => {
    try {
        const id = req.params.id;
        const userExist = await userModel.findById(id);
        if(!userExist){
            res.status(404).json({message:"User data not found"})
        }
        await userModel.findByIdAndDelete(id)
        res.status(200).json({message:"User deleted successfully"});
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
    }
}

export  {createUser,getAllUser,getUserById,update,deleteUser};

