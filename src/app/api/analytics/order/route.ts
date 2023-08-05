import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Order from 'lib/schema/order';
import User from 'lib/schema/user';
import Product from 'lib/schema/product';

export async function GET() {
  await connectDb();
  const today = new Date();
  const lastDay = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  const orders = await Order.find({
    createdAt: { $gte: lastDay, $lte: today },
  })
    .populate({ path: 'user', model: User })
    .populate({ path: 'products.product', model: Product })
    .sort({ createdAt: -1 });
  const totalPrice = orders.reduce((acc, order) => {
    return acc + order.totalPay;
  }, 0);

  return NextResponse.json({
    orders,
    totalPrice,
    totalOrders: orders.length,
  });
}
