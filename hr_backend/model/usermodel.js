//Insert Data inside mongoDB
// Method for creating Schema
// ==> Import mongoose
// ==> create instance new mongoose.schema
// ==> connect the model with schema


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required: true},
    middlename:{type:String},
    lastname:{type:String,required: true},
    email:{type:String,required: true},
    address:{type:String,required: true},
    display:{type:String},
    gender:{type:String},
    birth_date:{type:String},
    maritial_status:{type:String},
    nationality:{type:String}
});

const userModel = mongoose.model("users",userSchema);


export default userModel;