import mongoose from 'mongoose';

const connectDb = () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error(
        'Connect to MongoDB failed. Check your environment variables.',
      );
    }
    mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.log('error:', error);
  }
};
export default connectDb;
