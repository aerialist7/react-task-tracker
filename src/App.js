import {useEffect, useState} from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])

    useEffect(
        () => fetch("http://localhost:5000/tasks")
            .then(value => value.json())
            .then(tasks => setTasks(tasks)),
        []
    )

    const addTask = task => fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(task)
    })
        .then(value => value.json())
        .then(task => setTasks([...tasks, task]))

    const deleteTask = id => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE"
        }).then(() => setTasks(tasks.filter(task => task.id !== id)))
    }

    const toggleReminder = id => {
        fetch(`http://localhost:5000/tasks/${id}`)
            .then(value => value.json())
            .then(taskToToggle => ({...taskToToggle, reminder: !taskToToggle.reminder}))
            .then(updatedTask => {
                fetch(`http://localhost:5000/tasks/${id}`, {
                    method: "PUT",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(updatedTask)
                })
                    .then(value => value.json())
                    .then(value => setTasks(
                        tasks.map(task =>
                            task.id === id
                                ? {...task, reminder: value.reminder}
                                : task
                        )
                    ))
            })
    }

    return <div className="container">
        <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask}/>}
        {
            tasks.length > 0
                ? <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
                : "No Tasks to Show"
        }

    </div>
}

export default App
