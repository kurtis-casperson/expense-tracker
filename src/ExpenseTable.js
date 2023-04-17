import './App.css'

const ExpenseTable = () => {
  return (
    <div className="Table">
      <table className="Expense-Table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Merchant Type</th>
            <th>Description</th>
            <th>Payment</th>
            <th>Amount</th>
            <th>Remove</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default ExpenseTable
