import "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/navigation/Sidebar";
import Record from "./components/record/Record";
import Home from "./components/home/Home";
import Extraction from "./components/extraction/Extraction"; // Importing Extraction Component
import Generation from "./components/Generation/Generation";
import Settings from "./components/Settings/Settings";


function App() {
    return (
        <Router>
            <Sidebar />
            <div style={{ marginLeft: "260px", padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/record" element={<Record />} />
                    <Route path="/history" element={<Extraction />} />
                    <Route path="/tasks" element={<Generation/>} />
                    <Route path="/setting" element={<Settings />} />
                    </Routes>
            </div>
        </Router>
    );
}

export default App;
