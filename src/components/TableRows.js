import React from 'react'
import ExpenseTable from './ExpenseTable'
// import ExpenseTable from 'ExpenseTable'
const TableRows = (props) => {
  const { removeDataRow, expenseRow } = props
  return (
    <>
      {expenseRow.map((expense, index) => (
        <ExpenseTable key={index} {...expense} removeDataRow={removeDataRow} />
      ))}
    </>
  )
}
export default TableRows
