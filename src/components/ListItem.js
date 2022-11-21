import React from "react";
import { useState } from "react";
import DayJS from 'dayjs';
import dayjs from "dayjs";

function ListItem({item, list, setList}){
    const [isDone, setIsDone] = useState(item.done)
    const doneButtonClass = isDone ? "list-item-item check-item done-item" : "list-item-item check-item"
    const now = dayjs()
    const taskDate = item.date

    const classDeadline = dayjs().isAfter(dayjs(item.deadline)) ? "deadline list-item-item" : "deadline list-item-item deadTask"
    console.log(dayjs().isAfter(item.deadline))
    function toggleDone() {
        setIsDone(isDone ? false : true)
    }

    function deleteTask(id) {
        setList((prevTask => prevTask.filter(item => item.id !== id)))
        console.log(list)
    }

        

    return(
        <div className="list-item">
            <button 
                className={doneButtonClass}
                onClick={toggleDone}
            >
            </button>
            <div className="list-item-item">{item.name}</div>
            <div className="list-item-item">{item.description}</div>
            <div className={classDeadline}>{item.deadline}</div>
            <div className="list-item-item">{item.files}</div>
            <button className="delete-item" onClick={() => deleteTask(item.id)}>x</button>
        </div>
    )
}


export default ListItem