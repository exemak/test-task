import React from 'react';
import { compose, branch, lifecycle, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { UserInfo as Component } from '../component';
import { fetchCurrentUser } from '../redux/actions';

export const UserInfo = compose(
  connect(
    ({ currentUser }) => ({ currentUser }),
    dispatch => ({
      fetch: () => dispatch(fetchCurrentUser())
    })
  ),

  lifecycle({
    componentDidMount() {
      const { currentUser, fetch } = this.props;
      if (!currentUser) {
        fetch();
      }
    }
  }),

  branch(props => !props.currentUser, renderComponent(() => <CircularProgress />))
)(Component);