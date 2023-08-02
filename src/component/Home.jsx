import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './Home.module.css'
import Todos from './Todos';
import NewToDo from './NewToDo';



const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos,{id:uuidv4(),todo}]
        })
        console.log(todos);
    }

    const handleRemoveTodo = (id) => {
        
        setTodos((previousTodos) => {
            const filteredTodos = previousTodos.filter((todo) => todo.id !== id);
            return filteredTodos;
        });
    }

    return (
        <div className={style.container}>
            <h1>Todo App</h1>
            <NewToDo onAddToDo={ handleAddTodo} />
            <Todos todos={todos} onRemoveTodo={ handleRemoveTodo} />
        </div>
    );
};

export default Home;