function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index} >

                    <span 
                    className={task["completed"] ? "completed" : ""} 
                    onClick={() => toggleTask(task["id"])}> 
                    {task["text"]} 
                    </span>

                    <span 
                    className="delete" 
                    onClick={() => deleteTask(task["id"])}> 
                    X 
                    </span>

                </li>
            ))}
        </ul>
    );
}

export default TaskList;