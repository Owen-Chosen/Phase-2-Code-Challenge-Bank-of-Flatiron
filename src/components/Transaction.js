import React, { useState } from 'react'

function Transaction({ transaction }) {

    const {id, date, description, category, amount} = transaction;

  return (

    <tr id={id}>
      <td>{id}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button id={id}>Delete</button></td>
    </tr>
    
  )
}

export default Transaction