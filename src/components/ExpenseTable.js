import React from 'react'
import TableRows from './TableRows'

// let props = CreateExpense
const ExpenseTable = (props) => {
  const { expenses, removeDataRow } = props
  // function AddRow() {
  // Need to import the state from submit buttonmethod . Or change state from button method
  // button is pressed and a new row is added to the table .  Each new row is added with the
  // the current state.
  // }

  return (
    <>
      <div>
        <table className="Expense-Table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Merchant Type</th>
              <th>Payment</th>
              <th>Amount</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <TableRows expenses={expenses} removeDataRow={removeDataRow} />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ExpenseTable
