import React from "react"

function TaskCompletedorNot(props){
    const tasks = [
        { id: 1, title: 'Task 1', completed: true},
        { id: 2, title: 'Task 2', completed: false},
        { id: 3, title: 'Task 3', completed: true}
    ]

    return (
        <div>
            <h2> Listing Tasks: { tasks.length } </h2>
            {
                tasks.map(function (task, index){
                    return (
                        <p key={index}>  { task.completed  ? <font color="green"> { task.title } </font> : <font color="red"> { task.title }  </font> } </p>
                    )
                })
            }
        </div>
    )
}

export default TaskCompletedorNot