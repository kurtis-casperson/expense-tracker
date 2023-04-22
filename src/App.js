import React, { useState } from 'react'
import './index.css'
import ExpenseTable from './components/ExpenseTable'
import CreateExpense from './components/CreateExpense'
import TableRows from './components/TableRows'
import Header from './components/Header'

const App = () => {
  // from createxpense
  const [expense, setExpense] = useState()
  // accessing state from above to be able to add new row
  const [expenses, setExpenses] = useState([])

  // const ModifyTable = () => {
  //   const [expenses, setExpense] = useState()

  // function handleInputChange(event) {
  //   const { name, value } = event.target

  //   setExpense((prevExpense) => ({ ...prevExpense, [name]: value }))
  // }
  // }
  // expenseDescription = expenses.description
  // expenseAmount = expenses.amount

  return (
    <>
      <div>
        {console.log('expense', expense)}
        <Header />
      </div>
      <div>
        <CreateExpense expense={expense} setExpense={setExpense} />
      </div>
      <div className="submit-expense">
        <button
          type="submit"
          onClick={() => {
            const clonedExpenses = [...expenses]
            clonedExpenses.push(expense)
            setExpenses(clonedExpenses)
            setExpense('')
          }}
        >
          {console.log('expenses', expenses)}
          Add Expense
          {/* onClick= {pass changeState function} */}
          {/* onClick= {addRow} */}
          {/* when button pressed useState changes and eventlistener from table used to add row to table */}
        </button>
      </div>
      <div>
        <ExpenseTable />
        <TableRows expenses={expenses} key={expenses} />
      </div>
    </>
  )
}
// }
export default App
