import React from 'react';
import style from './Home.module.css'
import Todos from './Todos';

const dummyTodos=[
    {
        id:1,
        title: 'Todo Title1',
        desc: 'todo1 description is here'
    },
    {
        id:2,
        title: 'Todo Title2',
        desc: 'todo2 description is here'
    },
]

const Home = () => {
    return (
        <div className={style.container}>
            <h1>Todo App</h1>
           <Todos todos={dummyTodos}/>
        </div>
    );
};

export default Home;