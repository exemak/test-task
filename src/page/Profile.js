import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { UserInfo } from '../container';

const useStyles = makeStyles(theme => ({
  header: {
    marginTop: 40
  }
}));

export const Profile = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" className={classes.header}>
        Профиль
      </Typography>
      <UserInfo />
    </Container>
)};