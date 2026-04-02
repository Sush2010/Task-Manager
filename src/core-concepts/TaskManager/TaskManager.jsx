import { useState } from "react";
import TaskForm from "./TaskForm";
import "./TaskManager.css";
import TaskList from "./TaskList";

function TaskManager(){
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = { id:Date.now(), text, completed:false}
        setTasks([...tasks, newTask])
    }

    const toggleTask = (id) => {
        const updatedTasks = tasks.map((task) => (
            task.id == id ? {...task, completed: !task.completed} : task
        ))
    setTasks(updatedTasks);
    }

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter((task) => {
            return task["id"] !== id
        })
        setTasks(filteredTasks);
    }

    return(
        <div>
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
            <p>Tasks : {tasks.length}</p>
        </div>
    );
}

export default TaskManager;