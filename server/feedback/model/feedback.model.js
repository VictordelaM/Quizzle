import mongoose, { Schema } from "mongoose";


const feedbackSchema =new Schema({
    username:{type:String},
    feedback:{
        type:String,
        required:true,
    },
    
})

export const Feedback = mongoose.model("Feedback", feedbackSchema, "Feedbacks");


