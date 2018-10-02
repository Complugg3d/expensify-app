import 
{ 
    setEndDate, 
    setStartDate, 
    setTextFilter, 
    sortByAmount, 
    sortByDate 
} from '../../actions/filters';
import moment from 'moment';

test('Should setup generate start date action obj', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should setup generate end date action obj', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should setup generate text filter action obj with param', () => {
    const action  = setTextFilter('any');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'any'
    });
});

test('Should setup generate text filter action obj no param', () => {
    const action  = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate sort by date action obj', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should generate sort by amount action obj', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});