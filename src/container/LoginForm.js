import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { LoginForm as Component } from '../component';
import { authenticate } from '../redux/actions';

export const LoginForm = compose(
  connect(
    () => ({}),
    dispatch => ({
      authenticate: (form) => dispatch(authenticate(form))
    })
  ),
  withState('form', 'setForm', {}),
  withHandlers({
    onChange: props => fieldName => e => {
      const { value } = e.target;
      const { form, setForm } = props;
      setForm({
        ...form,
        [fieldName]: value
      })
    },
    onSubmit: props => e => {
      e.preventDefault();
      const { form, authenticate } = props;
      authenticate(form);
    }
  })
)(Component);
