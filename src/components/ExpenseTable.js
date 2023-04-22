import React from 'react'
// import './components/App.css'
// import CreateExpense from './CreateExpense'

// let props = CreateExpense
const ExpenseTable = ({ expenses }) => {
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
        </table>
      </div>
    </>
  )
}

export default ExpenseTable
