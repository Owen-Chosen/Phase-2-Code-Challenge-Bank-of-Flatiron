import React, { useState } from 'react'
import Transaction from './Transaction'

function DisplayTransactions({transactions}) {

  console.log(transactions)
    
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
            return <Transaction key={transaction.id} transaction={transaction}/>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayTransactions