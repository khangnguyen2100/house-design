'use client';

import { SessionProvider } from 'next-auth/react';
import { SnackbarProvider } from 'notistack';

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        {children}
      </SnackbarProvider>
    </SessionProvider>
  );
};
