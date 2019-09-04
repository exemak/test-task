import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { UserList } from '../container';


const useStyles = makeStyles(theme => ({
  header: {
    marginTop: 40
  }
}));

export const Users = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" className={classes.header}>
        Пользователи
      </Typography>
      <UserList />
    </Container>
)};