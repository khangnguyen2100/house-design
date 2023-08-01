import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Category from 'lib/schema/category';
import Product from 'lib/schema/product';
// create a new category
export async function POST(request: Request) {
  const body = await request.json();
  await connectDb();
  await Category.create(body);
  return NextResponse.json(
    {
      message: 'Success',
    },
    {
      status: 201,
    },
  );
}
// get all categories
export async function GET() {
  console.log('success');

  await connectDb();
  const categories = await Category.find({});
  // get total products in category
  const categoriesWithTotalProducts = await Promise.all(
    categories.map(async category => {
      const totalProducts = await Product.countDocuments({
        category: category._id,
      });
      return {
        ...category._doc,
        totalProducts,
      };
    }),
  );
  return NextResponse.json(categoriesWithTotalProducts);
}
