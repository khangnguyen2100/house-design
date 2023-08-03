import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Order from 'lib/schema/order';
import User from 'lib/schema/user';

// get all users
export async function GET() {
  await connectDb();
  const users = await User.find({});
  const getOrderOfUser = await Promise.all(
    users.map(async user => {
      const orderInfo = await Order.find({
        user: user._id,
      });
      const totalOrderPrice = orderInfo.reduce((acc, cur) => {
        return acc + cur.total;
      }, 0);
      return {
        ...user._doc,
        totalOrder: orderInfo,
        totalOrderPrice,
      };
    }),
  );

  return NextResponse.json(getOrderOfUser);
}
