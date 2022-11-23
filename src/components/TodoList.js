import React from "react";
import ListItem from "./ListItem"
import { useState } from 'react';
import { useEffect } from 'react';
import AddItemForm from "./AddItemForm";

/**
 * Компонент отображает список задач и форму для добавления новых
 */

function TodoList () {
    /**
    * Состояние для списка задач(загрузка из localstorage)
    */
    const savedList = JSON.parse(localStorage.getItem('list'));
    const [list, setList] = useState(savedList ? savedList : [])

    return(
        <div className='todo-list'>
            {!list.length && <div className="header2">Add first task:</div>}
            {list.map((item, i) => (
                <ListItem key={i} item={item} list={list} setList={setList} />
            ))}
            <AddItemForm list={list} setList={setList}/>
        </div>
         
    )
}

export default TodoList;
