import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import User from 'lib/schema/user';

export async function POST(request: Request) {
  const body = await request.json();
  await connectDb();
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
