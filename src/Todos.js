import React from 'react'
import { memo } from 'react';
const Todos = ({Todos , AddTodo})=> {
    console.log("child");
    
  return (
    <div>
        <h3>My Todo</h3>
        {
            Todos.map((todo , index) => (
            <p key={index}> {`${todo} ${index}`} </p>
            ))
        }
        <button onClick={()=>AddTodo()}>Add todo</button> 
    </div>
  )
}

export default memo(Todos);