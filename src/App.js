import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import './index.css'
import ExpenseTable from './components/ExpenseTable'
import CreateExpense from './components/CreateExpense'
import Header from './components/Header'
import './App.css'

const App = () => {
  const expenseObject = {
    id: Math.random(),
    amount: '',
    merchant: '',
    paymentType: '',
    date: '',
  }

  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem('formData')) || expenseObject
  )

  const [expenseRow, setRowData] = useState(
    []
    // JSON.parse(localStorage.getItem('rowData')) || []
  )

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

  useEffect(() => {
    console.log('useEffectexecute')
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  useEffect(() => {
    console.log('useEffectRowData')
    localStorage.setItem('rowData', JSON.stringify(expenseRow))
  }, [expenseRow])

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <CreateExpense formData={formData} setFormData={setFormData} />
      </div>
      <div className="text-center">
        <Button
          type="submit"
          variant="custom"
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
        <ExpenseTable removeDataRow={removeDataRow} expenseRow={expenseRow} />
      </div>
    </>
  )
}

export default App
