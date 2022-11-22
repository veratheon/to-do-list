import React from "react";
import FilesList from "./FilesList";
import { AddItemForm } from "./AddItemForm";
import { useState } from "react";
import DayJS from 'dayjs';
import dayjs from "dayjs";

function ListItem({item, list, setList}){
    const [isDone, setIsDone] = useState(item.done)
    const [editForm, setEditForm] = useState(false)
    const doneButtonClass = isDone ? "list-item-item check-item done-item" : "list-item-item check-item"
    const now = dayjs()
    const taskDate = item.date
    const classDeadline = dayjs().isAfter(dayjs(item.deadline)) ? "list-item-item deadTask" : "list-item-item"

    function toggleDone() {
        setIsDone(isDone ? false : true)
    }

    function deleteTask(id) {
        setList((prevTask => prevTask.filter(item => item.key !== id)))
    }

    function toggleEditForm() {
        setEditForm(prev => !prev)
    }

        

    return(
        <div>
        <div className="list-item">
            <button 
                className={doneButtonClass}
                onClick={toggleDone}
            >
            </button>
            <div className="list-item-item">{item.name}</div>
            <div className="list-item-item">{item.description}</div>
            <div className={classDeadline}>{item.deadline}</div>
            <FilesList className="list-item-item" key={item.key} id={item.key} files={item.files} filesURL={item.downloadURL} />
            <button 
            className="edit-button"
            onClick={toggleEditForm}
            >Edit</button>
            <button className="list-item-item delete-item" onClick={() => deleteTask(item.key)}>x</button>
        </div>
        {editForm && <AddItemForm list={list} setList={setList} editItem={item} setEditForm={setEditForm}/>}
        
        </div>
    )
}


export default ListItem