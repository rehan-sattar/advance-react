import { AUTH_USER, AUTH_ERROR } from './types';

const dispatchAction = (dispatch, type, payload) => dispatch({ type, payload });

export const signup = (formValues, callback) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8080/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });
    if (response.status === 200) {
      const data = await response.json();
      dispatchAction(dispatch, AUTH_USER, data.token);
      window.localStorage.setItem('token', data.token);
      callback();
    } else {
      dispatchAction(dispatch, AUTH_ERROR, 'This email is already in use!');
    }
  } catch (err) {
    dispatchAction(dispatch, AUTH_ERROR, 'Something went wrong!');
  }
};

export const signout = () => {
  window.localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: '',
  };
};

export const signin = (formValues, callback) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8080/api/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });
    if (response.status === 200) {
      const data = await response.json();
      dispatchAction(dispatch, AUTH_USER, data.token);
      window.localStorage.setItem('token', data.token);
      callback();
    } else {
      dispatchAction(dispatch, AUTH_ERROR, 'Invalid login credentials');
    }
  } catch (err) {
    dispatchAction(dispatch, AUTH_ERROR, 'Something went wrong!');
  }
};
