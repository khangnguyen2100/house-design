import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Product from 'lib/schema/product';

// create a new product
export async function POST(request: Request) {
  const body = await request.json();
  await connectDb();
  await Product.create(body);
  return NextResponse.json(
    {
      message: 'Success',
    },
    {
      status: 201,
    },
  );
}
// get all products
export async function GET() {
  await connectDb();
  const products = await Product.find({});
  return NextResponse.json(products);
}
