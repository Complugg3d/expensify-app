import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render expense Summary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={100}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should not render ExpensesSummary with empty message', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={123}/>);
    expect(wrapper).toMatchSnapshot();
});