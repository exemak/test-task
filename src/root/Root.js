import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr'
import Routes from './Routes';
import history from '../historyStore';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Routes/>
    </Router>

    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar={false}
      closeOnToastrClick/>
  </Provider>
);

export default Root;