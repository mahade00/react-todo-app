import React from 'react';
import style from './NewToDo.module.css'
const NewToDo = () => {
    return (
        <form className={style.form}> 
            <div className={style['form-field']}>
                <label htmlFor="title">Title: </label>
                <input type='text' id='title' name='title'/>
            </div>
            <div  className={style['form-field']}>
                <label htmlFor="desc">Desc: </label>
                <textarea type='text' id='desc' name='desc'/>
            </div>
            <button type='submit'>Add todo</button>
        </form>
    );
};

export default NewToDo;