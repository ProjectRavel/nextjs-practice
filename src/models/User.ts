import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        unique:true,
        reqired:true
    },
    email:{
        type:String,
        unique:true,
        reqired:true
    },
    password:{
        type:String,
        reqired:true
    },
}, {
    timestamps:true
})

export default mongoose.model("User", userSchema);