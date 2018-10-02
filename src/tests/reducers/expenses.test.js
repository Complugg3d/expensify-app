import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);    
});

test('should not remove expense by id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);    
});

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'Gas bill',
        note: '',
        amount: 1000,
        createdAt: 0
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);    
});

test('should edit expense', () => {
    const updates = {
        id: '1',
        description: 'Gas bill',
        note: '',
        amount: 1000,
        createdAt: 0
    }

    const action = {
        type: 'EDIT_EXPENSE',
        id: updates.id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual(updates);    
});

test('should not edit expense', () => {
    const updates = {
        id: '5',
        description: 'Gas bill',
        note: '',
        amount: 1000,
        createdAt: 0
    }

    const action = {
        type: 'EDIT_EXPENSE',
        id: updates.id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);    
});
