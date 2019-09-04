import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Grid, Card, CardContent, ListItemAvatar, Avatar, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { formatName, ucFirstLetter } from '../utils';


const useStyles = makeStyles({
  root: {
    marginTop: 40
  },
  avatar: {
    marginTop: 10,
    width: 80,
    height: 'auto',
  },
});


const InfoItem = ({ label, value }) => (
  <ListItem key={value}>
    <ListItemText  primary={label} />
    <ListItemSecondaryAction>
      {value}
    </ListItemSecondaryAction>
  </ListItem>
);

export const UserInfo = ({ currentUser: { email, name, phone, picture: { large: largePicture }, gender, login: { username } } }) => {
  const classes = useStyles();
 return (
  <Card className={classes.root}>
    <Grid container justify="center" alignItems="center" direction="column">
      <ListItemAvatar>
        <Avatar alt={formatName(name)} src={largePicture} className={classes.avatar} />
      </ListItemAvatar>
      <Typography variant="h5" component="h5">
        {formatName(name)}
      </Typography>
    </Grid>
    <Divider />
    <CardContent>
      <List>
        <InfoItem label="Имя" value={ucFirstLetter(name.first)} />
        <InfoItem label="Фамилия" value={ucFirstLetter(name.last)} />
        <InfoItem label="Email" value={email} />
        <InfoItem label="Username" value={username} />
        <InfoItem label="Номер телефона" value={phone} />
        <InfoItem label="Пол" value={gender} />
      </List>
    </CardContent>
  </Card>
)};
