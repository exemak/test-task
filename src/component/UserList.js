import React, { Fragment } from 'react';
import { Card, List, ListItem, ListItemAvatar, ListItemText, Typography, Avatar, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { formatName } from '../utils';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: 40
  },
}));


const SingleUser = ({ user: { email, phone, name, picture: { large: largePicture } } }) => {
  return (
    <Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={formatName(name)} src={largePicture} />
        </ListItemAvatar>
        <ListItemText
          primary={formatName(name)}
          secondary={
            <Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {email}
              </Typography>
              <br/>
              {phone}
            </Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Fragment>
)};

export const UserList = ({ users }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <List>
        {users.map((user, key) => <SingleUser key={key} user={user} /> )}
      </List>
    </Card>
  );
};
