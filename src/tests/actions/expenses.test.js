import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should set up remove exense action obj', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should set up edit expense action', () => {
    const action = editExpense('123abc', { description: 'something' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',    
        id: '123abc',
        updates: {
            description: 'something'
        }
    });
});

test('Should setup add expense acion obj with provided values', () => {
    const expenseData = {
        description: 'rent',
        note: 'the note',
        amount: 100,
        createdAt: 100
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense acion obj with default values', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});
