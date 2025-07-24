import React, { useEffect, useState } from 'react'

function Counter() {  

const [count, setCount] = useState(0);

useEffect(() => {

}, [])

const IncreaseCount =   () => {
    setCount(count + 1);
}

const DecreaseCount = () => {
    setCount(count - 1);
}

const resetCount = () => {
    setCount(0);    
}
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncreaseCount}>Increase Count</button>
      <button onClick={DecreaseCount}>Decrease Count</button>
      <button onClick={resetCount}>reset Count</button>
     
    </div>
  )
}

export default Counter
