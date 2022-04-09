import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=> props.greetHandler('child')}>Click me</button>
    </div>
  )
}

export default ChildComponent