import React from "react";
import FilesList from "./FilesList";
import AddItemForm from "./AddItemForm";
import { useState } from "react";
import DayJS from 'dayjs';
import dayjs from "dayjs";
/**
* Компонент отображает:
* Задачу(Название, описание, дедлайн, файлы)
* Кнопки для пометки "выполнено", удаления и редактирования
* при нажатии кнопки 'edit' компонент для редактирования
* @param {object} item  задача
* @param {Array} list  Список всех задач
* @param {function} setList Изменяет список всех задач
*/

function ListItem({item, list, setList}){
    /**
    * Закончена ли задача
    */
    const [isDone, setIsDone] = useState(item.done)

    /**
    * Редактируется ли сейчас форма
    */
    const [editForm, setEditForm] = useState(false)

    /**
    * Классы для отображения выполнения
    */
    const doneButtonClass = isDone ? "list-item-item check-item done-item" : "list-item-item check-item"

    /**
    * Текущая дата
    */
    const now = dayjs()

    /**
    * Классы для отображения даты(на случай опоздания) 
    */
    const classDeadline = dayjs().isAfter(dayjs(item.deadline)) ? "list-item-item deadTask" : "list-item-item"

    /**
    * Функция переключает выполнение задачи
    */
    function toggleDone() {
        setIsDone(isDone ? false : true)
    }

    /**
    * Функция удаляет задачу
    * @param {number} id номер задачи
    */
    function deleteTask(id) {
        setList((prevTask => prevTask.filter(item => item.key !== id)))
    }

    /**
    * Функция переключает редактирование задачи
    */
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