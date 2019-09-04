import React, { Component } from 'react';
import { Route } from 'react-router';


export default class LayoutRoute extends Component {

  getWrappedComponent() {
    const { layout: Layout, component: Component } = this.props;
    return (
      <Layout>
        <Component/>
      </Layout>
    )
  }

  render() {
    return (
      <Route {...this.props} component={() => this.getWrappedComponent()} />
    )
  }
}