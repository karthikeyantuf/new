import React from 'react'

const Greet= (props)=> 
{return(
    <div>
<h1>Hello {props.name}(Functional component)a.k.a {props.iname}</h1>
{props.children}
</div>
)}

export default Greet;