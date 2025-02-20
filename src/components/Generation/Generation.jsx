import  { useState } from "react";
import "./Generation.css";

const Generation = () => {
    // Sample task data
    const [tasks, setTasks] = useState([
        { id: 1, title: "Prepare presentation slides", assignedTo: "John", date: "2024-02-23", completed: false },
        { id: 2, title: "Send quarterly report", assignedTo: "Sarah", date: "2024-02-21", completed: false },
        { id: 3, title: "Schedule team meeting", assignedTo: "You", date: "2024-02-20", completed: true }
    ]);

    // Toggle task completion
    const toggleTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    return (
        <div className="generation-container">
            <h1>Action Items</h1>
            <div className="task-list">
                {tasks.map(task => (
                    <div key={task.id} className={`task-card ${task.completed ? "completed" : ""}`}>
                        <label className="toggle-switch">
                            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
                            <span className="slider"></span>
                        </label>
                        <div className="task-details">
                            <span className={`task-title ${task.completed ? "strikethrough" : ""}`}>{task.title}</span>
                            <div className="task-meta">
                                <span>{task.assignedTo}</span>
                                <span>{task.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="action-buttons">
                <button className="action-btn">📅 Create Calendar Event</button>
                <button className="action-btn">✅ Generate To-Do</button>
                <button className="action-btn">📝 Meeting Summary</button>
                <button className="action-btn">✉️ Share Key Points</button>
            </div>
        </div>
    );
};

export default Generation;
