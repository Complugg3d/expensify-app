import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './ruter/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import './firebase/firebase';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 200, createdAt: -2000 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: -21000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 150, createdAt: -1000 }));
// store.dispatch(setTextFilter('Wa'));
// console.log('state -> ', store.getState());
// console.log('vsible expenses', getVisibleExpenses(store.getState().expenses, store.getState().filters));
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById('app'));
		hasRendered = true;
	}
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if (history.location.pathname === '/') {
				history.push('/dashboard');
			}
		});
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});