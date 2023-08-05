import { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import connectDb from 'lib/config/db';
import User from 'lib/schema/user';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_SECRET_ID || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_SECRET_ID || '',
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
      console.log('session:', session);
      console.log('session token:', token);
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
      console.log('jwt user:', user);
      console.log('jwt token:', token);
      if (user) {
        return {
          ...token,
          ...user,
          expires: token.exp,
        } as Session;
      }
      return token;
    },
    async signIn({ account, profile }: { account: any; profile: any }) {
      if (account.provider === 'google') {
        if (!account) {
          throw new Error('No account found');
        }
        if (!profile) {
          throw new Error('No profile found');
        }

        if (!profile.email_verified) {
          throw new Error('Tài khoản chưa được xác thực');
        }
        connectDb();
        // Try to find the user and also return the password field
        const user = await User.findOne({ email: profile.email });
        if (user) {
          console.log('signIn user:', user);
          return {
            ...user,
            id: user._id,
          };
        }
        // create new user
        const newUser = await User.create({
          name: profile.name,
          email: profile.email,
          avatar: profile.picture,
          password: profile.sub,
          role: 'user',
        });
        return {
          ...newUser,
          id: newUser._id,
          accessToken: account.access_token,
        };
      }
      return true;
    },
  },
  pages: {
    signIn: '/login',
  },
} as NextAuthOptions;
