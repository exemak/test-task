import React from 'react';
import { branch, compose, lifecycle, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { UserList as Component } from '../component';
import { fetchUsers } from '../redux/actions';
import { USERS_AMOUNT_TO_SHOW } from '../consts';

export const UserList = compose(
  connect(
    ({ users }) => ({ users }),
    dispatch => ({
      fetch: () => dispatch(fetchUsers(USERS_AMOUNT_TO_SHOW))
    })
  ),
  lifecycle({
    componentDidMount() {
      const { fetch, users } = this.props;
      if (!users || users.length === 0) {
        fetch();
      }
    }
  }),

  branch(props => !props.users || props.users.length === 0, renderComponent(() => <CircularProgress />))
)(Component);