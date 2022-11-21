import React from "react";
import ListItem from "./ListItem"

function TodoList ({list, setList}) {
    return(
        <div className='todo-list'>
            {list.map((item) => (
                <ListItem item={item} list={list} setList={setList} />
            ))}
           
        </div>
         
    )
}

export default TodoList;
