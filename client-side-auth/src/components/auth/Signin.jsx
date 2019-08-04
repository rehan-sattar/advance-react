import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  componentWillMount() {}

  onSubmit = (formValues) => {
    const { signin, history } = this.props;
    signin(formValues, () => {
      history.push('/features');
    });
  };

  render() {
    const { handleSubmit, errorMessage } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" component="input" autoComplete="none" />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <div>{errorMessage}</div>
          <button type="submit"> Signin</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  errorMessage: auth.errorMessage,
});

export default compose(
  connect(
    mapStateToProps,
    actions,
  ),
  reduxForm({ form: 'signup' }),
)(Signup);
