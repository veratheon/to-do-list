import React from "react"; 
import { useState, useEffect } from "react";
import { useRef } from "react";
import { storage } from "..";
import {ref, uploadBytes, getDownloadURL } from "@firebase/storage"
 
export function AddItemForm({list, setList, editItem=null, setEditForm=null}) {
    const [buttonCliked, setButtonCliked] = useState(false)
    console.log(editItem)
    const [name, setName] = useState(editItem?.name || "")
    const [description, setDescription] = useState(editItem?.description || "")
    const [deadline, setDeadline] = useState(editItem?.name || "")
    const [id, setId] = useState(1)
    const [files, setFiles] = useState([])
    const [filesURL, setFilesUrl] = useState([])

    useEffect(() => {
        setName(editItem?.name || "")
        setDeadline(editItem?.deadline || "")
        setDescription(editItem?.description || "")
        setFiles(editItem?.files || [])
        setFilesUrl(editItem?.filesURL || [])
    }, [buttonCliked, list])


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

        setButtonCliked(prev => !prev)
        setList(prev => [...prev, task])
    }

    function editTask() {
        console.log(list)
        console.log(editItem)
        const editedTask = {
            name: name,
            description: description,
            deadline: deadline,
            files: files,
            downloadURL: filesURL,
            key: editItem.key
        }
        console.log(editedTask)
        setList(prev => {
            return prev.map(task => task.key === editItem.key ? {...editedTask} : {...task})
            })
        console.log(list)
        setEditForm(false)
        
    }

    function handleChangeFile(event) {
        event.preventDefault()
        console.log(event.target.files)
        if (event.target.files.length) {
            setFiles(prev => [...prev, event.target.files[0]])
            const fileRef = ref(storage, `${event.target.files[0].name}`)
            uploadBytes(fileRef, event.target.files[0]).then((file) => {
                //console.log(file)
                getDownloadURL(file.ref).then((url) => {
                    //console.log(url)
                    setFilesUrl((prev) => [...prev, url])
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
        {!editItem && <button className='add-task' onClick={addTask}>Add task</button>}
        {editItem && <button className='add-task' onClick={editTask}>Edit</button>}
        </div>
    )
}

