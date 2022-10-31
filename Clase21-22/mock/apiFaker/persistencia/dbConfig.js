import mongoose from 'mongoose';

export async function dbConnect(){
    const URL = 'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/apiFaker?retryWrites=true&w=majority'
    mongoose.connect(URL)
}