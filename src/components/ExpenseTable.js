import Table from 'react-bootstrap/Table';
import ExpenseItem from './ExpenseItem';
import '../styles/table.css';

const ExpenseTable = ({ expenses, handleRemove }) => {
  const expensesToDisplay = [];
  const sortedExpenses = [...expenses]
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA > dateB ? 1 : -1;
    });

  sortedExpenses.map(expense =>
    expensesToDisplay.push(
      <ExpenseItem
        key={expense.id}
        expense={expense}
        handleRemove={handleRemove} />
    )
  );

  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th className="text-center">Date</th>
          <th className="d-none d-sm-block truncate">Location</th>
          <th className="truncate">Description</th>
          <th className="text-center" colSpan={2}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {expensesToDisplay}
      </tbody>
    </Table>
  );
}

export default ExpenseTable;