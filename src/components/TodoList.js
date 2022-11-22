import React from "react";
import ListItem from "./ListItem"
import { useState } from 'react';
import { useEffect } from 'react';
import {AddItemForm} from "./AddItemForm"

function TodoList () {
    const [list, setList] = useState([])

    return(
        <div className='todo-list'>
            {list.map((item, i) => (
                <ListItem key={i} item={item} list={list} setList={setList} />
            ))}
            <AddItemForm list={list} setList={setList}/>
        </div>
         
    )
}

export default TodoList;
