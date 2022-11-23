import React from "react"; 
import ButtonAddTask from "./ButtonAddTask";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { storage } from "..";
import {ref, uploadBytes, getDownloadURL } from "@firebase/storage"

 /**
* Компонент отображает форму для изменения(ввода) задачи:
* Название, описание, дата, файлы
* @param {Array} list список всех задач
* @param {object} editItem изменяемая задача
* @param {function} setList изменяет список задач
* @param  {function} setEditForm меняет параметр для видимости компонента изменения
*/

function AddItemForm({list, editItem=null, setList, setEditForm=null}) {
    /**
    * Название задачи
    */
    const [name, setName] = useState(editItem?.name || "")

    /**
    * Описание задачи
    */
    const [description, setDescription] = useState(editItem?.description || "")

    /**
    * Дедлайн задачи
    */
    const [deadline, setDeadline] = useState(editItem?.name || "")

    /**
    * Уникальный номер задачи
    */
    const [id, setId] = useState(1)

    /**
    * Прикрепленные к задаче файлы
    */
    const [files, setFiles] = useState([])

    /**
    * Ссылки на прикрепленные к задаче файлы
    */
    const [filesURL, setFilesUrl] = useState([])

    /**
    * Загружается ли сейчас файл
    */
    const [loading, setLoading] = useState(false)

    /**
    * Ссылка на список задач
    */
    //const [listURL, setListURL] = useState("")


    /**
    * Хук устанавливает значения компонента для изменения
    */
    useEffect(() => {
        setName(editItem?.name || "")
        setDeadline(editItem?.deadline || "")
        setDescription(editItem?.description || "")
        setFiles(editItem?.files || [])
        setFilesUrl(editItem?.filesURL || [])
        localStorage.setItem('list', JSON.stringify(list));
        //sendListToFirebase()
    }, [list])

    /**
    * Функция добавляет новую задачу в список задач
    */
    function addTask() {
        setId(prev => prev + 1)
        const task = {
            name: name,
            description: description,
            deadline: deadline,
            files: files,
            downloadURL: filesURL,
            key: id
        }
        setList(prev => [...prev, task])
        
        
    }
    /**
    * Функция отправляет список задач в firebase но не работает
    */
    // function sendListToFirebase() {
    //     const listRef = ref(storage, `TodoList.JSON`)
    //     console.log(JSON.stringify(list))
    //     uploadBytes(listRef, JSON.stringify(list)).then((doc) => {
    //         getDownloadURL(doc.ref).then((url) => {
    //             setListURL(url)
    //         })
    //     })
    // }

    /**
    * Функция изменяет задачу в списке
    */
    function editTask() {
        /**
        * Измененная задача
        */
        const editedTask = {
            name: name,
            description: description,
            deadline: deadline,
            files: files,
            downloadURL: filesURL,
            key: editItem.key
        }
        

        /**
        * Изменение в списке нужной задачи
        */
        setList(prev => {
            return prev.map(task => task.key === editItem.key ? {...editedTask} : {...task})
            })

        /**
        * Скрытие формы для изменения
        */
        setEditForm(false)
    }

    /**
    * Функция загружает выбранные файлы и получает ссылки на них
    * с firebase и устанавливает флаг загрузки на время загрузки, 
    * чтобы деактивировать кнопку добавления файла на это время
    * @param {object} event 
    */
    function handleChangeFile(event) {
        event.preventDefault()
        if (event.target.files.length) {
            setLoading(true)
            setFiles(prev => [...prev, event.target.files[0]])
            const fileRef = ref(storage, `${event.target.files[0].name}`)
            uploadBytes(fileRef, event.target.files[0]).then((file) => {
                getDownloadURL(file.ref).then((url) => {
                    setFilesUrl((prev) => [...prev, url])
                    setLoading(false)
                    alert("File uploaded")
                })
            })
        }
        
        
    }

    return(
        <div>
        <div className="add-task-form">
            <label>Name: 
                <input
                placeholder="Name of task"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Description: 
                <input
                    placeholder="Description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label>Deadline: 
                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
            </label>
            <label>Files: 
                <input
                    type="file"
                    onChange={handleChangeFile}
                />
            </label>
        </div>
        {!editItem && <ButtonAddTask loading={loading} name={"Add task"} action={addTask}/>}
        {editItem && <ButtonAddTask loading={loading} name={"Edit task"} action={editTask}/>}
        </div>
    )
}

export default AddItemForm

