import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      { /* @todo add submit onSubmit="Do Epic Code" */}
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(input.value);
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={ (htmlInput) => input = htmlInput } />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)