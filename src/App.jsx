import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const [name1, setName] = useState("sara")
  const [num1, setNum1] = useState(3);
  const [num2, setNum2] = useState(4);
  const [sum, setSum] = useState(null);
  const [sub, setSub] = useState(null);
  const [mul, setMul] = useState(null);
  const [divi, setDivi] = useState(null);






  const changeName=()=> {
    name1 == "sara"?setName("NOUF"):  setName("sara")
  }

  let addNum=()=>{
    setSum(num1 + num2);

  }

  let subNum=()=>{
    setSub(num1 - num2);

  }

  
  let mulNum=()=>{
    setMul(num1 * num2);

  }

  let diviNum=()=>{
    setDivi(num1 / num2);

  }
  

  return (
    <>
     <button className='m-3' onClick={changeName}>clickme</button>
     {name1}
     <button className='m-3' onClick={()=>{setCount(count--)}}>clickme</button>
     {count}
    <input  type="number"  
    value={num1} 
    className='num1 m-3 bg-black text-white' 
    onChange={(e) => setNum1(Number(e.target.value))}
    />
    <input type="number"  
    value={num2} 
    className='num2 m-3 bg-black text-white' 
    onChange={(e) => setNum2(Number(e.target.value))}

    />
    <button className='m-3' onClick={addNum}>click of Add</button>
    {sum !== null && <div>Sum: {sum}</div>}

    <button className='m-3' onClick={subNum}>click of Sub</button>
    {sub !== null && <div>Sub: {sub}</div>}

    <button className='m-3' onClick={mulNum}>click of Mul</button>
    {mul !== null && <div>Mul: {mul}</div>}

    <button className='m-3' onClick={diviNum}>click of divi</button>
    {divi !== null && <div>Divi: {divi}</div>}

    </>
  )
}

export default App
