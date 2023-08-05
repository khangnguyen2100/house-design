'use client';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';

export default function LogIn() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const emailInput = data.get('email');
    const passwordInput = data.get('password');
    if (!emailInput || !passwordInput) {
      enqueueSnackbar('Vui lòng nhập đầy đủ thông tin đăng nhập!', {
        variant: 'error',
      });
      setLoading(false);
      return;
    }
    try {
      const result = await signIn('credentials', {
        redirect: false,
        callbackUrl: callbackUrl || '/',
        email: emailInput as string,
        password: passwordInput as string,
      });

      if (result && result.error) {
        throw new Error(result.error);
      }

      if (result && !result.error) {
        router.push(result.url || '/');
        enqueueSnackbar('Đăng nhập thành công!', { variant: 'success' });
      }
    } catch (error: any) {
      enqueueSnackbar(error.message as string, { variant: 'error' });
    }
    setLoading(false);
  };
  const handleLoginWithGoogle = async () => {
    try {
      const result = await signIn('google', {
        redirect: false,
        callbackUrl: callbackUrl || '/',
      });

      if (result && result.error) {
        throw new Error(result.error);
      }

      if (result && !result.error) {
        router.push(result.url || '/');
        enqueueSnackbar('Đăng nhập thành công!', { variant: 'success' });
      }
    } catch (error: any) {
      enqueueSnackbar(error.message as string, { variant: 'error' });
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5'>
          Đăng nhập tài khoản
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            type='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <LoadingButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            loading={loading}
          >
            Đăng nhập
          </LoadingButton>
          <Button
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLoginWithGoogle}
            color='secondary'
          >
            Đăng nhập với Google
          </Button>
          <Grid container justifyContent='flex-end'>
            {/* <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href='/sign-up' variant='body2'>
                {'Đăng ký tài khoản'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
