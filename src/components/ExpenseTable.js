import React from 'react'
import TableRows from './TableRows'

const ExpenseTable = (props) => {
  const { expenseRow, removeDataRow } = props

  return (
    <>
      <div>
        <table className="Expense-Table rounded-2">
          <thead>
            <tr>
              <th>Date</th>
              <th>Merchant </th>
              <th>Payment</th>
              <th>Amount</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            <TableRows expenseRow={expenseRow} removeDataRow={removeDataRow} />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ExpenseTable
