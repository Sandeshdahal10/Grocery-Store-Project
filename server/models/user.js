import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  cartItems:{
    type: Object,
    default:{}
  }
},{minimize: false});

const User = mongoose.models.User || mongoose.model("User", userScehma);

export default User;