import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './index.css'
import ExpenseTable from './components/ExpenseTable'
import CreateExpense from './components/CreateExpense'
import TableRows from './components/TableRows'
import Header from './components/Header'

const App = () => {
  // from createxpense
  // useState() was null .
  // this is where data is being stored .  Create expense is passed the formData, setFormData props

  const [formData, setFormData] = useState({
    amount: '',
    merchant: '',
    paymentType: '',
    date: '',
  })
  // accessing state from above to be able to add new row
  const [expenses, setExpenses] = useState([])

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
          type="button"
          // className="btn btn-primary btn-lg"
          variant="primary"
          size="lg"
          onClick={() => {
            const clonedExpenses = [...expenses]
            clonedExpenses.push(formData)
            setExpenses(clonedExpenses)
            setFormData({ amount: '', merchant: '', paymentType: '', date: '' })
          }}
        >
          Add Expense
        </Button>
      </div>
      <div>
        <ExpenseTable />
        <TableRows expenses={expenses} key={expenses} />
      </div>
    </>
  )
}

export default App
