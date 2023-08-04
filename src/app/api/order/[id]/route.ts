import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Order from 'lib/schema/order';
import User from 'lib/schema/user';
import Product from 'lib/schema/product';
// get order by id
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectDb();
  const result = await Order.findById(id)
    .populate({ path: 'user', model: User })
    .populate({ path: 'products.product', model: Product });

  if (!result) {
    return NextResponse.json(
      {
        message: 'Order with the given id not found',
      },
      { status: 404 },
    );
  }
  return NextResponse.json(result);
}
