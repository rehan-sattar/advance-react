import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'signup' })(Signup);
