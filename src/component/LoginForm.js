import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '10px',
  },
  submit: {
    marginTop: '10px',
  },
}));

export const LoginForm = ({ form, onChange, onSubmit }) => {
  const classes = useStyles();

  return (
      <form className={classes.form} noValidate onSubmit={onSubmit}>
        <TextField
          onChange={onChange('username')}
          value={form.username || ''}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Имя пользователя"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          onChange={onChange('password')}
          value={form.password || ''}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Войти
        </Button>
      </form>
  );
};
