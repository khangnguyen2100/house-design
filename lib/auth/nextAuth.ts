import { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import connectDb from 'lib/config/db';
import User from 'lib/schema/user';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_SECRET_ID || '',
    }),
    CredentialsProvider({
      name: 'Sign in',
      // The credentials object is what's used to generate Next Auths default login page - We will not use it however.
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      // Authorize callback is ran upon calling the signin function
      authorize: async credentials => {
        if (!credentials) {
          throw new Error('Please enter your email and password');
        }
        connectDb();

        // Try to find the user and also return the password field
        const user = await User.findOne({ email: credentials.email }).select(
          '+password',
        );

        if (!user) {
          throw new Error('No user with a matching email was found.');
        }

        // Use the comparePassword method we defined in our user.js Model file to authenticate
        const pwValid = await user.comparePassword(credentials.password);

        if (!pwValid) {
          throw new Error('Your password is invalid');
        }
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          role: token.role,
          id: token.id,
          expires: token.exp,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          ...user,
          expires: token.exp,
        } as Session;
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
  },
} as NextAuthOptions;
