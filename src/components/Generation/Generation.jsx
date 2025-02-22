import { useState } from "react";
import "./Generation.css";

const Generation = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Prepare presentation slides", assignedTo: "John", date: "2024-02-23", completed: false },
        { id: 2, title: "Send quarterly report", assignedTo: "Sarah", date: "2024-02-21", completed: false },
        { id: 3, title: "Schedule team meeting", assignedTo: "You", date: "2024-02-20", completed: true }
    ]);

    const [transcribedText, setTranscribedText] = useState("");
    const [keyPoints, setKeyPoints] = useState([]);

    const toggleTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const openGoogleCalendar = () => {
        window.open("https://calendar.google.com", "_blank");
    };

    const showTranscribedText = () => {
        setTranscribedText("Transcribed text from the meeting: 'Discussed Q1 strategy and assigned tasks for product launch...'");
    };

    const generateKeyPoints = () => {
        const points = [
            "Improve project workflow",
            "Enhance team collaboration",
            "Set weekly check-ins",
            "Optimize task assignments",
            "Review performance metrics"
        ];
        setKeyPoints(points.sort(() => 0.5 - Math.random()).slice(0, 3));
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
                <button className="action-btn" onClick={openGoogleCalendar}>📅 Create Calendar Event</button>
                <button className="action-btn" onClick={showTranscribedText}>📝 Meeting Summary</button>
                <button className="action-btn" onClick={generateKeyPoints}>✉️ Share Key Points</button>
            </div>

            {transcribedText && (
                <div className="transcribed-text">
                    <h3>Meeting Summary</h3>
                    <p>{transcribedText}</p>
                </div>
            )}

            {keyPoints.length > 0 && (
                <div className="key-points">
                    <h3>Key Points</h3>
                    <ul>
                        {keyPoints.map((point, index) => (
                            <li key={index}> {point}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        
    );
};

export default Generation;
