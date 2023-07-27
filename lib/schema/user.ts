import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter your email'],
      minLength: [6, 'Your password must be at least 6 characters long'],
      select: false, //dont send back password after request
    },
    role: {
      type: String,
      default: 'user',
      enum: {
        values: ['user', 'admin'],
      },
    },
    name: String,
    status: String,
    phoneNumber: Number,
    address: String,
    avatar: String,
  },
  {
    timestamps: true,
  },
);

// ENCRYPTION
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password as string, 10);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
