import mongoose, { Schema } from "mongoose";


const userSchema = new Schema ({
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
    points:{
      type:Number,
      default: 0
    },
    // emailVerified:{
    //     type: Boolean,
    //     default: false,
    // },
    // verificationCode:{
    //     type:String,
    //     default:""
    // },
    answers:[
            {
              questionID: {
                type: String,
                required: true, 
              },
              answer: {
                type: Number,
              },
            },
          ]
    

})

export const User = mongoose.model("User", userSchema, "Users");