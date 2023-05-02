import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const CreateExpense = ({ setRowData }) => {
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

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

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

  function handleInputChange(event) {
    const { name, value } = event.target

    setFormData((prevExpense) => ({ ...prevExpense, [name]: value }))
  }

  return (
    <>
      <form className="expense-input-container">
        <div>
          <div className="row-one">
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="row-one" placeholder="Merchant Type">
            <input
              type="text"
              name="merchant"
              placeholder="Merchant Type"
              value={formData.merchant}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div>
          <div className="row-two">
            <input
              type="text"
              name="paymentType"
              placeholder="Cash, Card, or Crypto.."
              value={formData.paymentType}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="row-two">
            <input
              type="number"
              placeholder="Amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
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
    </>
  )
}

export default CreateExpense
