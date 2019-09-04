import React from 'react';
import { AppBar, Toolbar, Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
  link: {
    margin: 10,
  },
  toolbarTitle: {
    marginRight: 'auto',
  },
}));


export const Header = () => {
  const classes = useStyles();
  return (
  <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
        Test task
      </Typography>
      <nav>
        <Link component={RouterLink} variant="button" color="textPrimary" to="/" className={classes.link}>
          На главную
        </Link>
        <Link component={RouterLink} variant="button" color="textPrimary" to="/users" className={classes.link}>
          Новости
        </Link>
        <Link component={RouterLink} variant="button" color="textPrimary" to="/profile" className={classes.link}>
          Профиль
        </Link>
      </nav>
    </Toolbar>
  </AppBar>
)};
