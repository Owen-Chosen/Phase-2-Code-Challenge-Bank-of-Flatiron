import React, { useState } from 'react'
import Transaction from './Transaction'

function DisplayTransactions({transactions, hasChange, setHasChange}) {

  let count = 1;

  function handleDelete (event) {
    const id = event.target.id;
    fetch (`http://localhost:3000/transactions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    }).then(res => res.json()).then(data => {
      setHasChange(() => !hasChange)
    })

}    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return <Transaction key={transaction.id}
             handleDelete={handleDelete}
              count={count++}
               transaction={transaction}/>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayTransactions