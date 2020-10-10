import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';

function App() {
  return (
    <div className="App">
      {/* 
      Add todo items
      List all todo items
      Done todo itemss
      */}
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
}

export default App;
