import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    role: String,
    status: String,
    phoneNumber: Number,
    address: String,
    avatar: String,
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);

export default User;
