/**
 * @middleware : custom redux-promise-middleware
 */
export default ({ dispatch }) => next => action => {
  /**
   * 1 - Check to see if the action has promise on its payload.
   */
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  /**
   * 2 - if it contains a  promise, wait to get it resolve,
   * 3 - Create a new action
   * 4 - dispatch the action.
   */
  action.payload.then(response =>
    dispatch({
      ...action,
      payload: response
    })
  );
};
