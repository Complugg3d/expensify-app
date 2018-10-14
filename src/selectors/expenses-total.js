export default (expenses = []) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((prev, current) => prev + current, 0);
};