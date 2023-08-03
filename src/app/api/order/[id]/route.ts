import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Order from 'lib/schema/order';
// get order by id
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectDb();
  const result = Order.findById(id);
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
