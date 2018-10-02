import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboarPage from '../../components/ExpenseDashboarPage';

test('should render ExpenseDashboarPage component correctly', () =>{
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<ExpenseDashboarPage />);
    expect(wrapper).toMatchSnapshot();
});