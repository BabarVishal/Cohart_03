import React, { useState } from 'react'

function Home() {

    const [count, setCount] = useState(0);

   

  return (
    <div>
      <h1>Home Page!</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Home
