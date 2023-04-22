import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ExpenseTable from './components/ExpenseTable'
import CreateExpense from './components/CreateExpense'
import AddTableRow from './components/TableRows'
import Header from './components/Header'
import reportWebVitals from './reportWebVitals'
import Form from './Practice'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Header />
    <CreateExpense />
    <ExpenseTable /> */}
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
