import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        price: Number,
      },
    ],
    totalPay: Number,
    totalQuantity: Number,
    status: {
      type: String,
      default: 'pending',
      enum: {
        values: ['pending', 'delivery', 'success', 'cancel'],
      },
    },
    address: String,
    phoneNumber: Number,
    note: String,
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;
