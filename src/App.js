import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './index.css'
import ExpenseTable from './components/ExpenseTable'
import CreateExpense from './components/CreateExpense'
import Header from './components/Header'

const App = () => {
  // from createxpense
  // useState() was null .
  // this is where data is being stored .  Create expense is passed the formData, setFormData props

  // form data is an array and it is set to the default value of the state
  // in this case expenseObject.  setFormData then changes the state with a method that access the onchange of name and value
  const [formData, setFormData] = useState({
    id: Math.random(),
    amount: '',
    merchant: '',
    paymentType: '',
    date: '',
  })

  // accessing state from above to be able to add new row
  const [expenses, setExpenses] = useState([])

  let clonedExpenses
  const addDataRow = () => {
    clonedExpenses = [...expenses]
    clonedExpenses.push(formData)
    setExpenses(clonedExpenses)
  }

  const removeDataRow = (id) => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id)
    setExpenses(filteredExpenses)
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <CreateExpense formData={formData} setFormData={setFormData} />
      </div>
      <div>
        <Button
          type="submit"
          variant="warning"
          size="lg"
          onClick={() => {
            addDataRow()
            setFormData({
              id: Math.random(),
              amount: '',
              merchant: '',
              paymentType: '',
              date: '',
            })
          }}
        >
          Add Expense
        </Button>
      </div>
      <div>
        <ExpenseTable removeDataRow={removeDataRow} expenses={expenses} />
      </div>
    </>
  )
}

export default App
