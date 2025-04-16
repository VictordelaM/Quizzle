import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const quizSchema = new Schema({
    quizId: { type: String, default: uuidv4, unique: true, required: true }, 
    title: { type: String, required: true },
    description: { type: String },//!
    imgLink: { type: String }, //!
    owner: { type: String, required: true },//!
    rating:[{//!
        userId: { type: String },
        rating: { type: Number, required: true }
    }],
    categories: [{
        categoryName: { type: String, required: true },
        categoryId: { type: String, default: uuidv4, required: true }, 
        questions: [
            {
                questionId: { type: String, default: uuidv4, required: true }, 
                questionText: { type: String, required: true },
                questionType: { type: String }, // Guess or Choice
                options: [{ type: String }],
                correctAnswer: { type: String, required: true },
                videoLink: { type: String },
                imgLinks: [{ type: String }],
            }
        ]
    }],
    sessions:[{
        sessionId:{ type: String, default: uuidv4, required: true  },
        moderator: { type: String, required: true },//!
        sessionName: { type: String },//!
        invites: [{ username :{type: String} }],//!
        settings: {
            participatLimit: { type: Number },//!
            onlyInvited: { type: Boolean },//!
            showPoints: { type: Boolean },//!
            jokerNumber: { type: Number, default: 0 },//!
            sessionImg: { type: String },//!
            passwordRequired: { type: Boolean },//!
            passwordHash: { type: String },//!
        },
        participants:[{
            username: { type: String },
            userId: { type: String },
            userImg: { type: String },
            points:[{
                category: { type: String },
                categoryId: { type: String },
                question: { type: String },
                questionId: { type: String },
                answer: { type: Number },
                points: { type: Number, default: 0 }
            }]
        }],
        activeQuestion:{
            category: { type: String },
            categoryId: { type: String },
            questionId: { type: String }, 
            questionText: { type: String },
            questionType: { type: String }, // Guess or Choice
            options: [{ type: String }],
            correctAnswer: { type: String },
            videoLink: { type: String },
            imgLinks: [{ type: String }],
            answers:[{
                username: { type: String },
                userId: { type: String },
                answer: { type: Number },
                userImg: { type:String }
            }]
        },
        log:[{
            questionId: { type: String },
            questionText: { type: String },
            category: { type: String },
            categoryId: { type: String },
            correctAnswer: { type: String },
            options: [{ type: String }],
            questionType: { type: String },
            answers:[{
                username: { type: String },
                userId: { type: String },
                answer: { type: String },
                points: { type: Number }
            }]
        }],
        openCategories:[{
            category: { type: String },
            categoryId: { type: String },
        }]
    }],
    
});

export const Quiz = mongoose.model("Quiz", quizSchema);

