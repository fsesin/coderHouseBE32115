import mongoose from 'mongoose'

export async function bdConnect() {
  const URL =
    'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/atlasMongoose?retryWrites=true&w=majority'

  mongoose.connect(URL)
}
