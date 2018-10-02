import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {
        type: 'SORT_BY_AMOUNT'
    });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {
        type: 'SORT_BY_DATE'
    };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('shoud set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'something'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('something');
});

test('shoud set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment()
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment());
});

test('shoud set startDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment()
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment());
});