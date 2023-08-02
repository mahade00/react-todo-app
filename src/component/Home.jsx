import React from 'react';
import Todos from './Todos';

const dummyTodos=[
    {
        id:1,
        name: 'Anisul Islam',
        desc: 'todo1 description is here'
    },
    {
        id:2,
        name: 'Rizwan Islam',
        desc: 'todo2 description is here'
    },
]

const Home = () => {
    return (
        <div>
           <Todos todos={dummyTodos}/>
        </div>
    );
};

export default Home;