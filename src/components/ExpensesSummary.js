import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';  
import selectTotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expensesWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formatedAmount = numeral(expensesTotal / 100).format('$0,0.00');
    
    return (
        <h1>
            Viewing { expensesCount } { expensesWord } totalling { formatedAmount }
        </h1>                    
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectTotalExpenses(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
