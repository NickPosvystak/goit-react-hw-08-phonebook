import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/AuthReducer';
import { StyledFormBtn, StyledFormInput, StyledFormLogin } from './Login.styled';

// materialUI

// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));

    reset();
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Email:</span>
        <StyledFormInput
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && <span>This field is required</span>}
      </label>

      <label>
        <span>Password:</span>
        <StyledFormInput
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <StyledFormBtn type="submit">Sign In</StyledFormBtn>
    </StyledFormLogin>
  );
};

export default LoginPage;
