import React from 'react'

const TableRows = (props) => {
  const { removeDataRow, expenseRow } = props
  return (
    <>
      {expenseRow.map((expense, index) => (
        <tr key={index}>
          <td>{expense.date}</td>
          <td>{expense.merchant}</td>
          <td>{expense.paymentType}</td>
          <td>{expense.amount}</td>
          <td>
            <button onClick={() => removeDataRow(expense.id)}>X</button>
          </td>
        </tr>
      ))}
    </>
  )
}
export default TableRows
