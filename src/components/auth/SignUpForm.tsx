'use client';
import { NoSsr } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import React, { FormEvent } from 'react';

const SignUpForm: React.FC = () => {
  async function createUser(email: string, password: string, name: string) {
    const response = await fetch('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
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
    const enteredEmail = data.get('email');
    const enteredPassword = data.get('password');
    const enteredName = data.get('name');

    if (!enteredEmail || !enteredPassword || !enteredName) {
      alert('Please enter valid email and password!');
      return;
    }

    // optional: Add validation

    // await signIn('credentials', {
    //   redirect: '/',
    //   email: enteredEmail,
    //   password: enteredPassword,
    // });
    try {
      const result = await createUser(
        enteredEmail as string,
        enteredPassword as string,
        enteredName as string,
      );
      console.log('result:', result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box component='form' noValidate onSubmit={submitHandler} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
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
            label='Password'
            type='password'
            id='password'
            autoComplete='password'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value='allowExtraEmails' color='primary' />}
            label='I want to receive inspiration, marketing promotions and updates via email.'
          />
        </Grid>
      </Grid>
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      <Grid container justifyContent='flex-end'>
        <Grid item>
          <Link href='#' variant='body2'>
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpForm;
