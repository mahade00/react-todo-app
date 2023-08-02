import React from 'react';
import style from './Todos.module.css'
import Todo from './Todo';

const Todos = (props) => {
    
    return (
       <section className={style.todos}>
        {
            props.todos.map((todo) => <Todo todo={todo.todo} key={todo.id} id={ todo.id} onRemoveItem={props.onRemoveTodo} />)
        }
       </section>
    );
};

export default Todos;