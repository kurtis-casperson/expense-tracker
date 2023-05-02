import React from 'react'
import { Button } from 'react-bootstrap'

const TableRows = (props) => {
  const { removeDataRow, rowData } = props
  return (
    <>
      {rowData.map((expense, index) => (
        <tr key={index}>
          <td>{expense.date}</td>
          <td>{expense.merchant}</td>
          <td>{expense.paymentType}</td>
          <td>{expense.amount}</td>
          <td>
            <Button
              type="submit"
              variant="danger"
              size="sm"
              onClick={() => removeDataRow(expense.id)}
            >
              X
            </Button>
          </td>
        </tr>
      ))}
    </>
  )
}
export default TableRows
