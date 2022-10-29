import mongoose from 'mongoose'

export async function connect() {
  const URL =
    'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/bdAfter?retryWrites=true&w=majority'
  mongoose.connect(URL)
}
