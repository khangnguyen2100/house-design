import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import User from 'lib/schema/user';

export async function POST(request: Request) {
  const body = await request.json();
  await connectDb();
  const email = body.email;
  const userExist = await User.findOne({
    email,
  });
  if (userExist) {
    return NextResponse.json(
      {
        message: 'Email đã được sử dụng',
      },
      {
        status: 400,
      },
    );
  }

  const user = await User.create(body);

  return NextResponse.json(
    {
      message: 'Created user success',
      user,
    },
    {
      status: 201,
    },
  );
}
