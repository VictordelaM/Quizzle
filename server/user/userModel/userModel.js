import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema =new Schema({
    userId: { type: String, default: uuidv4, unique: true, required: true }, 
    username:{
        type:String,
        required:true,
    },
    passwordHash:{
        type:String,
        // required:true,
    },
    // email:{
    //     type:String,
    //     required:true,
    // },
    // emailVerified:{
    //     type: Boolean,
    //     default: false,
    // },
    // verificationCode:{
    //     type:String,
    //     default:""
    // },
    pictureUrl:{
        type: String,
    },
    questionsAnswered:[{
        questionId:String,
        question: String,
        answer: Number, 
    }]
})

export const User = mongoose.model("User", userSchema, "Users");



