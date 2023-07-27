/* eslint-disable no-unused-vars */
import { getToken, JWT } from 'next-auth/jwt';
import { NextApiRequest, NextApiResponse } from 'next';

const secret = process.env.NEXTAUTH_SECRET;

// CHECKING FUNCTIONS
export const hasToken = async (req: NextApiRequest) => {
  const token = await getToken({ req, secret });
  if (!token) {
    return false;
  }
  return true;
};

export const isAdmin = async (req: NextApiRequest) => {
  const token = (await getToken({ req, secret })) as JWT & {
    user: Record<string, unknown>;
  };
  if (!token || token.user.role !== 'admin') {
    return false;
  }
  return true;
};
// API MIDDLEWARE
export const hasTokenMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (err?: Error | undefined) => void,
) => {
  const token = await getToken({ req, secret });
  if (!token) {
    return next(new Error('Not Allowed - Not logged in'));
  }
  next();
};
export const isAdminMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (err?: Error | undefined) => void,
) => {
  const token = (await getToken({ req, secret })) as JWT & {
    user: Record<string, unknown>;
  };
  if (!token || token.user.role !== 'admin') {
    return next(new Error('Not Allowed - Not admin'));
  }
  next();
};
