import React, { useState } from 'react'

// let expenseDescription = document.getElementById('expenseDescription')
// let expenseAmount = document.getElementById('expenseAmount')

// const expenseObject = {
//   // date:
//   paymentType: ['Card', 'Cash', 'Crypto'],
//   amount: '',
//   merchant: '',
// }

const CreateExpense = (props) => {
  const { expense, setExpense } = props

  // setexpense will refer back to the previous value when there is a change
  //
  // const [expenses, setExpense] = useState(expenseObject)

  function handleInputChange(event) {
    const { name, value } = event.target

    setExpense((prevExpense) => ({ ...prevExpense, [name]: value }))

    // if (expenses.amount === '') return
  }

  // if (this.amount === '')
  // expenseDescription = expenses.description
  // expenseAmount = expenses.amount

  return (
    <>
      <form className="expense-input-container">
        <div id="date">
          <input type="date" placeholder="Date"></input>
        </div>
        <div className="merchant-type" placeholder="Merchant Type">
          <input
            type="text"
            name="merchant"
            placeholder="Merchant Type"
            value={expense?.merchant || ''}
            onChange={handleInputChange}
          ></input>
        </div>

        <div id="paymentType">
          <select required>
            <option id="" disabled selected>
              Payment Type
            </option>
            <option name="Card">Card</option>
            <option name="Cash">Cash</option>
            <option name="Crypto">Crypto</option>
          </select>
        </div>
        <div id="expenseAmount">
          <input
            type="number"
            placeholder="Amount"
            name="amount"
            value={expense?.amount || ''}
            // why did this work. line 63
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
    </>
  )
}

export default CreateExpense
