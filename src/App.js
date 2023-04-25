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
  const [expenseRow, setRowData] = useState([])

  let clonedExpenses
  const addDataRow = () => {
    if (
      formData.amount === '' ||
      formData.merchant === '' ||
      formData.paymentType === '' ||
      formData.date === ''
    ) {
      return
    }
    clonedExpenses = [...expenseRow]
    clonedExpenses.push(formData)
    setRowData(clonedExpenses)
  }

  const removeDataRow = (id) => {
    const filteredExpenses = expenseRow.filter((expense) => expense.id !== id)
    setRowData(filteredExpenses)
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
          variant="success"
          size="sm"
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
        <ExpenseTable removeDataRow={removeDataRow} expenseRow={expenseRow} />
      </div>
    </>
  )
}

export default App
