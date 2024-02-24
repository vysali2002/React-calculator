
import { useState } from 'react';
import './App.css'

function App() {
  const[result,setResult]=useState('')
const handleClick =(e)=>{
   e.preventDefault()
   setResult(result.concat(e.target.name))

}
const handleDelete=(e)=>{
  e.preventDefault()
setResult(result.slice(0,-1))
}
const handleCalculate=(e)=>{
  e.preventDefault()
  setResult(eval(result).toString())
}
console.log(result);
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'violet' }} className='main d-flex justify-content-center align-items-center  p-5'>
        <div style={{ width: '450px',height:'500px', backgroundColor:'gray' }} className=' p-5 rounded'>
          <form >
            <div className='d-flex justify-content-center display '  >
             <input className='rounded' type="text"  value={result}  />
            </div>
            <div className='shrink'  >
            <button name='7' onClick={handleClick} >7</button>
            <button   name='8'onClick={handleClick} >8</button>
            <button  name='9' onClick={handleClick}>9</button>
            <button  name='/' onClick={handleClick}>/</button>
            </div>
            <div className='shrink' >
            <button  name='4' onClick={handleClick}>4</button>
            <button  name='5' onClick={handleClick}>5</button>
            <button   name='6' onClick={handleClick}>6</button>
            <button  name='*' onClick={handleClick}>*</button>
            </div>
            <div className='shrink' >
            <button  name='3' onClick={handleClick}>3</button>
            <button   name='2' onClick={handleClick}>2</button>
            <button   name='1'onClick={handleClick}>1</button>
            <button  name='-' onClick={handleClick}>-</button>
            </div>
            <div className='shrink' >
            <button  name='0' onClick={handleClick}>0</button>
            <button  name='Dlt' onClick={handleDelete}>Dlt</button>
            <button style={{backgroundColor:'orange'}} name='=' onClick={handleCalculate}>=</button>
            <button  name='+' onClick={handleClick}>+</button>
            </div>
          </form>
        
        </div>
      </div>


    </>
  )
}

export default App
