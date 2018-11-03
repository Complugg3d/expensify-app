import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Header } from '../../components/Header';

test('should render Header component correctly', () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<Header startLogout={() => { }} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should call startLogout on btn click', () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').prop('onClick')();
  expect(startLogout).toHaveBeenCalled();
});