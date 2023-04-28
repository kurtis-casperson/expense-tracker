import React from 'react'

const CreateExpense = (props) => {
  const { formData, setFormData } = props

  // setFormData will refer back to the previous value when there is a change

  function handleInputChange(event) {
    const { name, value } = event.target
    // dont understnad this totally
    // my interpretation: using spread operator to copy the formdata. and then accessing
    // name and value from the form?
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
    </>
  )
}

export default CreateExpense
