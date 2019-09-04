import React from 'react';
import { Container, Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { LoginForm } from '../container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '10px',
    backgroundColor: 'red',
  },
}));

export const Login = () => {
  const classes = useStyles();
  return (
  <Container component="main" maxWidth="xs">
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Вход
      </Typography>
    <LoginForm/>
    </div>
  </Container>
)};