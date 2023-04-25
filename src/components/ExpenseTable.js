import React from 'react'
// import TableRows from './TableRows'

// let props = CreateExpense
const ExpenseTable = (props) => {
  const { removeDataRow } = props

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
            <tr key={props.index}>
              <td>{props.date}</td>
              <td>{props.merchant}</td>
              <td>{props.paymentType}</td>
              <td>{props.amount}</td>
              <td>
                <button onClick={() => removeDataRow(props.id)}>X</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ExpenseTable
