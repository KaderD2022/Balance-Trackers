
import React, { useState } from "react";
import TranscationMenu from "./TranscationMenu";
// import ReactSwitch from "react-switch";
export const Balance = () => {


  
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const onIcome  = (amount) =>{
   setIncome(income+amount);
   setBalance(balance+amount);
  }
  const onExpense  = (amount) =>{
   setIncome(expense+amount);
   setBalance(balance-amount);
  }


  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl mt-16">
        Balance : <span className="font-bold">{balance}</span>
      </p>

      <div className="flex  gap-10 mt-5">
        <p className="bg-green-800 p-2 rounded-xl">
          Income :<span>{income}</span>
        </p>
        <p className="bg-red-500 p-2 rounded-xl">
          Expense :<span>{expense}</span>
        </p>
      </div>
      <TranscationMenu onIcome={onIcome} onExpense={onExpense} />
    </div>
  );
}
