import authReducer from '../../reducers/auth';

test('should set UID on Login', () => {
  const uid = 'HJfhdsjfewfhrfjhsd';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear UID after Logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: 'HJfhdsjfewfhrfjhsd'}, action);
  expect(state).toEqual({});
});
