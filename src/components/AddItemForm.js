import React from "react"; 
import { useState } from "react";
import { useRef } from "react";

function AddItem({list, setList}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [deadline, setDeadline] = useState("")
    const [id, setId] = useState(1)
    const [file, setFile] = useState([])
    const fileComponent = useRef()
    


    function addTask() {
        const task = {
            name: name,
            description: description,
            deadline: deadline,
            files: [...file]
        }
        setId(prev => prev + 1)
        setList(prev => [...prev, {...task, id: id}])

    }

    function handleChangeFile(event) {
        event.preventDefault()
        setFile(event.target.files)

    }

    return(
        <div>
        <div className="add-task-form">
            <label>Name: 
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Description: 
                <input
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
        <button className='add-task' onClick={addTask}>Add new task</button>
        </div>
    )
}

export default AddItem;