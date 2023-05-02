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

  const [rowData, setRowData] = useState(
    JSON.parse(localStorage.getItem('rowData')) || []
  )

  const addDataRow = () => {
    if (
      formData.amount === '' ||
      formData.merchant === '' ||
      formData.paymentType === '' ||
      formData.date === ''
    ) {
      return
    }

    setRowData((expenseRow) => [...expenseRow, formData])
  }

  const removeDataRow = (id) => {
    const filteredExpenses = rowData.filter((expense) => expense.id !== id)
    setRowData(filteredExpenses)
  }

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  useEffect(() => {
    localStorage.setItem('rowData', JSON.stringify(rowData))
  }, [rowData])

  return (
    <>
      <Header />
      <CreateExpense formData={formData} setFormData={setFormData} />
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
      <ExpenseTable removeDataRow={removeDataRow} rowData={rowData} />
    </>
  )
}

export default App
