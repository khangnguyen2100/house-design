import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Order from 'lib/schema/order';
import User from 'lib/schema/user';
import Product from 'lib/schema/product';

// create a new order
export async function POST(request: Request) {
  const body = await request.json();
  await connectDb();
  await Order.create(body);
  return NextResponse.json(
    {
      message: 'Đặt hàng thành công',
      status: 201,
    },
    {
      status: 201,
    },
  );
}
// get all orders
export async function GET() {
  await connectDb();
  const orders = await Order.find({})
    .sort({ createdAt: -1 })
    .populate({ path: 'user', model: User })
    .populate({ path: 'products.product', model: Product });
  return NextResponse.json(orders);
}
