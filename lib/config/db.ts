import mongoose, { ConnectOptions } from 'mongoose';

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

const global: any = {};
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(
        mongoUri as string,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions,
      )
      .then(mongoose => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDb;
