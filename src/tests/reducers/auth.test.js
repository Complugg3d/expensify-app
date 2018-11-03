import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual({});
});

test('should set uid to login reducer', () => {
  const action = {
    type: 'LOGIN',
    uid: '123uid'
  };
  const state = authReducer(null, action);
  expect(state).toEqual({
    uid: action.uid
  });
});

test('should set uid undefined to logioutn reducer', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: '123id' }, action);
  expect(state).toEqual({});
});