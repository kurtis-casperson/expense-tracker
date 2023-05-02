import React, { useState, useEffect } from 'react'
import './index.css'
import ExpenseTable from './components/ExpenseTable'
import CreateExpense from './components/CreateExpense'
import Header from './components/Header'
import './App.css'

const App = () => {
  const [rowData, setRowData] = useState(
    JSON.parse(localStorage.getItem('rowData')) || []
  )

  const removeDataRow = (id) => {
    const filteredExpenses = rowData.filter((expense) => expense.id !== id)
    setRowData(filteredExpenses)
  }

  useEffect(() => {
    localStorage.setItem('rowData', JSON.stringify(rowData))
  }, [rowData])

  return (
    <>
      <Header />
      <CreateExpense setRowData={setRowData} />
      <ExpenseTable removeDataRow={removeDataRow} rowData={rowData} />
    </>
  )
}

export default App
