import React from 'react';
import './TodoList.css'

function TodoList(props) {
const renderFunc = props.children || props.render;

  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos.length) && props.onEmptyTodos(props.searchText)}

      {props.searchedTodos.map(renderFunc)}
     

      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
