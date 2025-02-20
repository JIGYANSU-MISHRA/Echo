import { useState, useEffect } from "react";
import "./Settings.css";

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [autoTranscription, setAutoTranscription] = useState(true);
    const [cloudBackup, setCloudBackup] = useState(true);

    // Apply dark mode only to settings-container
    useEffect(() => {
        const container = document.querySelector(".settings-container");
        if (darkMode) {
            container.classList.add("dark-mode");
        } else {
            container.classList.remove("dark-mode");
        }
    }, [darkMode]);

    // Toggle functions
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleNotifications = () => {
        setNotifications(!notifications);
        if (!notifications) alert("Notifications Enabled!");
    };

    // Handle clearing all data
    const clearAllData = () => {
        localStorage.clear();
        alert("All data has been cleared!");
    };

    return (
        <div className="settings-container">
            <h1>Settings</h1>

            <div className="setting-item">
                <span>Auto Transcription</span>
                <label className="switch">
                    <input type="checkbox" checked={autoTranscription} onChange={() => setAutoTranscription(!autoTranscription)} />
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="setting-item">
                <span>Cloud Backup</span>
                <label className="switch">
                    <input type="checkbox" checked={cloudBackup} onChange={() => setCloudBackup(!cloudBackup)} />
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="setting-item">
                <span>Dark Mode</span>
                <label className="switch">
                    <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="setting-item">
                <span>Notifications</span>
                <label className="switch">
                    <input type="checkbox" checked={notifications} onChange={toggleNotifications} />
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="settings-actions">
                <button className="export-btn">Export All Data</button>
                <button className="clear-btn" onClick={clearAllData}>Clear All Data</button>
            </div>

            <p className="version">Version 1.0.0</p>
        </div>
    );
};

export default Settings;
