import React from 'react';

const Todo = ({ onClick, completed, text }) =>{
  return (
    <li 
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {/* add on click functionality to mark todo as completed */}
       { text }
    </li>
  )
}

export default Todo

// completed ? 'line-through' : 'none'
/*
if(completed){
  return 'line-through'
} else {
  return 'none'
}
*/