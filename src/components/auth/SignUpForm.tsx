'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React, { FormEvent } from 'react';

interface CreateUserProps {
  name: string;
  email: string;
  address: string;
  password: string;
  phoneNumber: string;
}
const SignUpForm: React.FC = () => {
  const router = useRouter();
  async function createUser(input: CreateUserProps) {
    const response = await fetch('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }

    return data;
  }
  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const enteredEmail = data.get('email') as string;
    const enteredPassword = data.get('password') as string;
    const enteredPasswordRepeat = data.get('password-repeat') as string;
    const enteredName = data.get('name') as string;
    const enteredPhoneNumber = data.get('phoneNumber') as string;
    const enteredAddress = data.get('address') as string;

    if (
      !enteredEmail ||
      !enteredPassword ||
      !enteredName ||
      !enteredAddress ||
      !enteredPasswordRepeat ||
      !enteredPhoneNumber
    ) {
      enqueueSnackbar('Vui lòng nhập đủ thông tin', {
        variant: 'info',
      });
      return;
    }

    if (enteredPassword !== enteredPasswordRepeat) {
      enqueueSnackbar('Mật khẩu không khớp', {
        variant: 'error',
      });
      return;
    }
    try {
      const input: CreateUserProps = {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        phoneNumber: enteredPhoneNumber,
        address: enteredAddress,
      };
      const result = await createUser(input);
      if (result?.user) {
        enqueueSnackbar(
          `Đăng ký tài khoản ${result?.user?.email} thành công!`,
          {
            variant: 'success',
          },
        );
        router.push('/login');
      }
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
      console.log(error);
    }
  };
  return (
    <Box component='form' noValidate onSubmit={submitHandler} sx={{ mt: 3 }}>
      <Grid container spacing={2} className='mt-6'>
        <Grid item xs={12}>
          <TextField
            autoComplete='full-name'
            name='name'
            required
            fullWidth
            id='name'
            label='Full Name'
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name='password'
            label='Mật khẩu'
            type='password'
            id='password'
            autoComplete='password'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name='password-repeat'
            label='Nhập lại mật khẩu'
            type='password'
            id='password-repeat'
            autoComplete='password'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete='phone-number'
            name='phoneNumber'
            required
            fullWidth
            id='phoneNumber'
            label='Số điện thoại'
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id='address'
            label='Địa chỉ'
            name='address'
            autoComplete='address'
          />
        </Grid>
      </Grid>
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Đăng ký
      </Button>
      <Grid container justifyContent='flex-end'>
        <Grid item>
          <Link href='/login' variant='body2'>
            Đã có tài khoản? Đăng nhập tại đây.
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpForm;
