import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Category from 'lib/schema/category';
import Product from 'lib/schema/product';
// update a category
export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const body = await request.json();
  await connectDb();

  const result = await Category.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  if (!result) {
    return NextResponse.json(
      {
        message: 'Category with the given id not found',
      },
      { status: 404 },
    );
  }
  return NextResponse.json(
    {
      message: result,
    },
    { status: 201 },
  );
}
// delete a category
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const body = await request.json();
  await connectDb();

  const result = await Category.findOneAndDelete({ _id: id }, body);
  if (!result) {
    return NextResponse.json(
      {
        message: 'Category with the given id not found',
      },
      { status: 404 },
    );
  }
  return NextResponse.json(
    {
      message: 'Category deleted successfully',
    },
    { status: 201 },
  );
}

// get all products in a category
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectDb();
  const products = await Product.find({ category: id });
  return NextResponse.json(products);
}
