import { login, logout } from '../../actions/auth';

test('Should set up login action obj', () => {
  const uid = '123uid';
  const action = login(uid);
  expect(action).toEqual({
      type: 'LOGIN',
      uid
  });
});

test('Should set up logout action obj', () => {
  const action = logout();
  expect(action).toEqual({
      type: 'LOGOUT'
  });
});