import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './ruter/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import './firebase/firebase';
// import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 200, createdAt: -2000 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: -21000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 150, createdAt: -1000 }));
// store.dispatch(setTextFilter('Wa'));
// console.log('state -> ', store.getState());
// console.log('vsible expenses', getVisibleExpenses(store.getState().expenses, store.getState().filters));
const jsx = (
		<Provider store={store}>
				<AppRouter/>
		</Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() => {
		ReactDOM.render(jsx, document.getElementById('app'));
});