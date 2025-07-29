import React, { useRef } from 'react'

function Home() {
    //useRef
    //Focussing on inpute box.

    const inputRef = useRef();
    const focusOnInput = () => {
        // document.getElementById("name").focus();
        inputRef.current.focus();
    }
 
  return (
    <div>
      sign up
      <input ref={inputRef} type="text" />
      <input  id='name' type="text" />
      <button onClick={focusOnInput}>submit</button>
    </div> 
  )
} 

export default Home
