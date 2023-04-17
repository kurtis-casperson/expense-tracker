import React from 'react'

const CreateExpense = () => {
  return (
    <div class="expense-input-container">
      <div id="date">
        <input type="date" placeholder="Date"></input>
      </div>
      <div id="merchant" placeholder="Merchant Type">
        <select required>
          <option id="" disabled selected>
            Merchant Type
          </option>
          <option id="Car">Car</option>
          <option id="Clothing">Clothing</option>
          <option id="Eating-out">Eating out</option>
          <option id="Groceries">Groceries</option>
          <option id="Housing">Housing</option>
          <option id="Medical">Medical</option>
          <option id="Subscriptions">Subscriptions</option>
          <option id="Other">Other</option>
        </select>
      </div>
      <div id="description">
        <input type="text" placeholder="Description"></input>
      </div>
      <div id="payment-type">
        <select required>
          <option id="" disabled selected>
            Payment Type
          </option>
          <option id="Card">Card</option>
          <option id="Cash">Cash</option>
          <option id="Crypto">Crypto</option>
        </select>
      </div>
      <div id="amount">
        <input type="number" placeholder="Amount"></input>
      </div>
      <div class="submit-expense">
        <button type="submit">Add Expense</button>
      </div>
    </div>
  )
}

export default CreateExpense
