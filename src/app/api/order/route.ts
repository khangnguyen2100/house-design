import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Order from 'lib/schema/order';

// create a new order
export async function POST(request: Request) {
  const body = await request.json();
  await connectDb();
  const result = await Order.create(body);
  console.log('result:', result);
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
  const orders = await Order.find({}).sort({ createdAt: -1 });
  return NextResponse.json(orders);
}
