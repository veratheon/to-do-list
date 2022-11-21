import React from "react"; 
import { useState } from "react";

function AddItem({list, setList}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [deadline, setDeadline] = useState("")
    const [id, setId] = useState(1)
    


    function addTask() {
        const task = {
            name: name,
            description: description,
            deadline:deadline,
            files: "sedf"
        }
        setId(prev => prev + 1)
        setList(prev => [...prev, {...task, id: id}])
        console.log(list)

    }

    return(
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

            <button className='add-task' onClick={addTask}>Add new task</button>

        </div>
    )
}

export default AddItem;