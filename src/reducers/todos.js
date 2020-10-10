const todos = (reduxState = [], action) => {
  console.log(action);
  switch(action.type) {
    // case add todo
    case 'ADD_TODO':
      return [
        ...reduxState,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    // case toggle todo

    case 'TOGGLE_TODO':
      // comparison ? if true : if false ;
      return reduxState.map(todo => 
        (todo.id === action.id) 
            ? {...todo, completed: !todo.completed} 
            : todo
      );

    default:
      return reduxState;
  }
}

export default todos;