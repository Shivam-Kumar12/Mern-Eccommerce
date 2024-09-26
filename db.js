import mongoose from "mongoose"
import colors from 'colors';

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Connected to mongoDb ${conn.connection.host}`.bgMagenta.white);


  } catch (error) {
    console.log(`MongoDB connection error:${error}`.bgRed.white)
  }
}
export default connectdb