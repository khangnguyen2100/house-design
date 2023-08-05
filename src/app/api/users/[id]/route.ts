import { NextRequest, NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Order from 'lib/schema/order';
import User from 'lib/schema/user';

// get all users
export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDb();
  const { id } = params;
  const user = await User.findById(id);
  if (!user) {
    return NextResponse.json(
      {
        message: 'User with the given id not found',
      },
      { status: 404 },
    );
  }
  const orderInfo = await Order.find({
    user: id,
  });
  const totalOrderPrice = orderInfo.reduce((acc, cur) => {
    return acc + cur.totalPay;
  }, 0);
  return NextResponse.json({
    ...user._doc,
    totalOrders: orderInfo.length,
    totalOrderPrice,
  });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const user = await User.findById(id);
  if (!user) {
    return NextResponse.json(
      {
        message: 'User with the given id not found',
      },
      { status: 404 },
    );
  }

  const type = request.nextUrl.searchParams.get('type');
  // update status
  if (type === 'change-status') {
    await User.findByIdAndUpdate(id, {
      status: user.status === 'active' ? 'block' : 'active',
    });
    return NextResponse.json({
      message:
        user.status === 'active'
          ? 'Khóa tài khoản thành công'
          : 'Mở khóa tài khoản thành công',
    });
  }
  // update role
  if (type === 'change-role') {
    await User.findByIdAndUpdate(id, {
      role: user.role === 'admin' ? 'user' : 'admin',
    });
    return NextResponse.json({
      message:
        user.status === 'admin'
          ? 'Chuyển quyền thành khách hàng thành công'
          : 'Chuyển quyền thành ADMIN thành công',
    });
  }
  NextResponse.json({
    message: 'Không tìm thấy type',
  });
}
