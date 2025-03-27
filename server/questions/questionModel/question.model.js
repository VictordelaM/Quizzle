import mongoose, { Schema } from "mongoose";


const questionSchema = new Schema ({
    question:{
        type: String,
        required: true
    },
    answer:{
        type:Number,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    
    })

export const Question = mongoose.model("Question", questionSchema, "Questions");