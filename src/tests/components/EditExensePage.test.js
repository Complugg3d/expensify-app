import { EditExpensePage } from '../../components/EditExpensePage';
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, wrapper, history, expense;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    expense = expenses[0];

    wrapper = shallow(<EditExpensePage editExpense={ editExpense } 
        removeExpense = { removeExpense }        
        expense={expense}
        history={ history }/>);    
});

test('should render EditExpensePage correctly', () => {    
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense dispatch', () => {      
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]); 
}); 

test('should handle on remove exense', () => {    
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id }); 
}); 