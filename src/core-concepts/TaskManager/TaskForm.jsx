import { useState } from "react";

function TaskForm({addTask}) {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedValue = value.trim();
        if (trimmedValue) {
            addTask(trimmedValue)
            setValue("")
        }
    }
     
    return (
        <form onSubmit={handleSubmit}>
            <div className="add-task-action">
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Add a task"
                    className="add-task-input"
                />
                <button type="submit" className="add-task-btn">Add</button>
            </div>

        </form>
    );
}

export default TaskForm;