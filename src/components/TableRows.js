import React from 'react'
// import App from '../App'

const TableRows = ({ expenses }) => {
  return (
    <>
      <tbody>
        {/* <App expenses={expenses} /> */}
        {expenses.map((expense) => (
          <tr>
            <td>{expense.description}</td>
            <td>{expense.merchant}</td>
            <td>{expense.amount}</td>
            <td></td>
          </tr>
        ))}

        {/* <td>{date.addRow}</td> */}
        {/* or add list itmes? */}
        {/* <td>{merchant.addRow}</td> */}
        {/* </thead> */}
        {/* <CreateExpense /> */}
        {/* create empty rows to be able to add data from state */}
      </tbody>
    </>
  )
}
export default TableRows
