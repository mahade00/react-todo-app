import React from 'react';
import style from  './Todo.module.css';
import { RiDeleteBinLine } from "react-icons/ri";

const Todo = (props) => {
    const {title, desc, id}=props.todo;
    return (
      <article>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button className={style.deleteBtn} type='submit'>{RiDeleteBinLine()}</button>
            </div>
      </article>
    );
};

export default Todo;