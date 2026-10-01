import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    city:{
        type : String,
        required: true,
        trim:true,
        minlength:3,
    }
})

export const User = model('User', userSchema)
