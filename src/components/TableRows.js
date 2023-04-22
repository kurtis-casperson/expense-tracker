import React from 'react'

const TableRows = ({ expenses }) => {
  return (
    <>
      <tbody>
        {expenses.map((expense) => (
          <tr>
            <td>{expense.date}</td>
            <td>{expense.merchant}</td>
            <td>{expense.paymentType}</td>
            <td>{expense.amount}</td>
          </tr>
        ))}
      </tbody>
    </>
  )
}
export default TableRows
