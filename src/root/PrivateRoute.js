import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { redirect } from '../utils';

class PrivateRoute extends Component {
  getWrappedComponent() {
    const { layout: Layout, component: Component } = this.props;
    return (
      <Layout>
        <Component/>
      </Layout>
    )
  }

  render() {
    const { auth: { isAuthenticated } } = this.props;
    if (isAuthenticated) {
      return (
        <Route {...this.props} component={() => this.getWrappedComponent()} />
      )
    } else {
      redirect('/login');
      return null;
    }
  }
}

export default connect(({ auth }) => ({ auth }))(PrivateRoute);