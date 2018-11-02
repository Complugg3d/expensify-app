import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense, 
    removeExpense, 
    editExpense, 
    setExpeses, 
    startSetExpenses, 
    startRemoveExpense, 
    startEditExpense 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = {
            description,
            note,
            amount,
            createdAt
        }; 
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('Should set up remove exense action obj', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from db and store', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });

        return database.ref(`expenses/${id}`).once('value');                                 
    }).then((snapshot) => {
        expect(snapshot.val()).toBeNull();
        done();
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

test('should edit expense to firebase and store', (done) => {
    const store = createMockStore({});
    
    const updates = {
        amount: 1200,
        note: 'the edition is good'
    };

    store.dispatch(startEditExpense(expenses[2].id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenses[2].id,
            updates
        });

        return database.ref(`expenses/${expenses[2].id}`).once('value');                                 
    }).then((snapshot) => {
        expect(snapshot.val().amount).toEqual(updates.amount);
        expect(snapshot.val().note).toEqual(updates.note);
        done();
    });
});

test('Should setup add expense acion obj with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to db and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 300,
        note: 'this one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');                                 
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to db and store', (done) => {
    const store = createMockStore({});
    const expenseData = { };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');                                 
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        });
        done();
    });
});

test('should setup set expense action with obj data', () => {
    const action = setExpeses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});
