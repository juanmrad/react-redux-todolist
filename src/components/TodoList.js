import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos, toggleTodo }) => {

  console.log(todos);
  return (
    <ul>
      {
      todos.map(todo => 
        <Todo 
          key={todo.id}
          completed={todo.completed}
          text={todo.text}
          onClick={() => toggleTodo(todo.id)}
        />
        )
      }
    </ul>
  )
}

export default TodoList;