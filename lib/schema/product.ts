import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    salePrice: Number,
    thumbnail: String,
    images: [String],
    category: { type: Schema.Types.ObjectId, ref: 'category' },
    remainingItem: Number,
    rating: {
      type: Number,
    },
    information: {
      wide: String,
      long: String,
      high: String,
      material: String,
    },
  },
  {
    timestamps: true,
  },
);
const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
