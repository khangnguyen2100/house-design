import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Bill from 'lib/schema/bill';
import User from 'lib/schema/user';

// get all users
export async function GET() {
  await connectDb();
  const users = await User.find({});
  const getBillOfUser = await Promise.all(
    users.map(async user => {
      const billInfo = await Bill.find({
        user: user._id,
      });
      const totalBillPrice = billInfo.reduce((acc, cur) => {
        return acc + cur.total;
      }, 0);
      return {
        ...user._doc,
        totalBill: billInfo,
        totalBillPrice,
      };
    }),
  );

  return NextResponse.json(getBillOfUser);
}
