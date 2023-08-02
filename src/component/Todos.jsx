import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    console.log(props)
    return (
       <section>
        {
            props.map((todo)=><Todo name={todo.name} desc={todo.desc} key={todo.id}/>)
        }
       </section>
    );
};

export default Todos;