import React, { useState, useEffect } from "react";
import DisplayTransactions from "./DisplayTransactions";


function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then(res => res.json())
    .then(transactions => {setTransactions(transactions)})
  },[])

  return (
    <main>
      <DisplayTransactions transactions={transactions}/>
    </main>
  );
}

export default App;
