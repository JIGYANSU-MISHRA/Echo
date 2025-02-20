import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/record">Voice Processing</Link></li>
                <li><Link to="/history">Action Extraction</Link></li>
                <li><Link to="/tasks">Action Generation</Link></li>
                <li><Link to="/setting">Settings</Link></li>

            </ul>
        </div>
    );
};

export default Sidebar;
