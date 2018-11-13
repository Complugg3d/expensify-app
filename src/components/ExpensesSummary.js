import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectTotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';



export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expensesWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formatedAmount = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount}</span> {expensesWord} 
          totalling <span>{formatedAmount}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="btn-layout" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
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
