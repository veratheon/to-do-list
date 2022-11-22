import React from "react";

function EnterTaskForm({list, setList}) {
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