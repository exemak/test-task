import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 80
  }
}));

export const Homepage = () => {
  const classes = useStyles();
  return (
  <Container maxWidth="sm" className={classes.root}>
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      Тестовое задание
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
      P.S: ссылка "новости" в шапке на самом деле ведет на страницу с пользователями. <br/>
      Дело в том, что в задании почему-то было указано, что назвать ее нужно "новости", так я и сделал.
    </Typography>
  </Container>
)};