
import React, { useState } from "react";
const TranscationMenu = ({ onIcome, onExpense}) => {
const [menu, setMenu] = useState(false)
const [data, setData] = useState([])
const [amount, setAmount] = useState()
const [title, setTitle] = useState("")
const [transcationType, setTranscationType] = useState("expense");

const toggleButton = ()=>{
  setMenu(!menu)
}

const handleSubmit=(e)=>{
  e.preventDefault();

  const info = {
    id: data.length + 1,
    title: title,
    amount: amount,
    transcationType: transcationType,
  };
  if (!amount || !title) {
    alert("Amount and Title are required")
  }
  if (transcationType) {
    onIcome(Number(amount));
  } else {
    onExpense(Number(amount));
  }
  setData((prevData=>[...prevData, info]));
  setAmount("")
  setTitle('')
  setTranscationType('expense')
  setMenu(!menu)
}


  return (
    <div>
      <div className="mt-6 flex flex-col items-center">
        <button
          className="bg-black text-white p-2 rounded-lg hover:bg-gray-700 mb-6"
          onClick={toggleButton}
        >
          add Transaction
        </button>
        {menu && (
          <div className="flex item-center">
            <div className="flex flex-col text-black">
              <input
                type="number"
                required
                placeholder="Enter Amount"
                className="p-2 border rounded-lg border-black placeholder:text-gray-700"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Enter title"
                className="p-2 border rounded-lg border-black placeholder:text-gray-700"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <select
                name=""
                id=""
                className="p-2 border rounded-lg"
                value={transcationType}
                onChange={(e) => setTranscationType(e.target.value)}
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              <button
                className="bg-black text-white mb-2 p-2 rounded-lg hover:bg-gray-700 mt-2"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
      {data.length >0 &&
        data.map((dt) =>(
          <div className="flex">
            <div
              className={`flex w-[200px] justify-between flex-row text-white gap-4 mb-2 p-2 font-bold rounded-md
            ${dt.transcationType==='expense'? 'bg-red-500': 'bg-green-700'}
              `}>
              <p>{dt.title}</p>
              <p>{dt.amount}</p>
            </div> 
          </div>
        ))
        }
    </div>
  );
}

export default TranscationMenu