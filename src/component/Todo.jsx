import React, { useState } from 'react';
import style from  './Todo.module.css';
import { RiDeleteBinLine } from "react-icons/ri";

const Todo = (props) => {
  
  const { title, desc } = props.todo;
  const {  id } = props;
  
  const handleClick = (id) => {
    props.onRemoveItem(id);
  }

   
    // console.log(handleDeleteBtn)
    return (
      <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button className={style.btn}  onClick={()=>{handleClick(id)}} >{RiDeleteBinLine()}</button>
        </div>
      </article>
    );
};

export default Todo;