import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage component correctly', () => {
  const wrapper = shallow(<LoginPage startLogin={() => { }} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should call startLogin on btn click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').prop('onClick')();
  expect(startLogin).toHaveBeenCalled()
});