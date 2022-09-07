import React from 'react';
import '../styles/table.css';

const ExpenseItem = (props) => {
  const { expense, handleRemove } = { ...props };
  const {
    date,
    description,
    location,
    amount,
    id
  } = { ...expense };

  const handleClick = (e) => {
    handleRemove(id);
  }

  const dateString = new Date(date.replace(/-/g, '/')).toLocaleDateString();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  const amountString = formatter.format(amount);

  return (
    <tr>
      <td className="text-center">{dateString}</td>
      <td className="text-truncate truncate d-none d-sm-block">{location}</td>
      <td className="text-truncate truncate">{description}</td>
      <td className="text-danger text-end">{amountString}</td>
      <td className="delete-column">
        <img
          src={require('../assets/remove.png')}
          alt="trash icon"
          onClick={handleClick}
        />
      </td>
    </tr >
  );
}

export default ExpenseItem;