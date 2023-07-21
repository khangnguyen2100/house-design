import mongoose, { Schema } from 'mongoose';

const billSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        price: Number,
      },
    ],
    total: Number,
    status: String,
    address: String,
    phoneNumber: Number,
    note: String,
  },
  {
    timestamps: true,
  },
);

const Bill = mongoose.model('Bill', billSchema);
export default Bill;
