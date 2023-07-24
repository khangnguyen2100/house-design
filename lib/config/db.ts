import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error(
        'Connect to MongoDB failed. Check your environment variables.',
      );
    }
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
    console.log('MongoDB connected');
  } catch (error) {
    console.log('error:', error);
  }
};
export default connectDb;
