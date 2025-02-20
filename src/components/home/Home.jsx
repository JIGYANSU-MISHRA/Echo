import "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Smart Voice Assistant</h1>
            <p className="intro">
                A smart solution for professionals to capture and organize actionable items from meetings effortlessly.
            </p>

            <section className="feature-section">
                <h2>Core Features</h2>

                <div className="feature">
                    <h3>🎙️ Voice Processing</h3>
                    <p>
                        - Record and transcribe voice conversations in real-time.  
                        - Supports English language with basic accent handling.
                    </p>
                </div>

                <div className="feature">
                    <h3>📌 Action Extraction</h3>
                    <p>
                        - Automatically identifies action items, tasks, and key discussion points.  
                        - Extracts meeting details such as date and time.
                    </p>
                </div>

                <div className="feature">
                    <h3>📅 Action Generation</h3>
                    <p>
                        - Converts extracted data into calendar events, to-do tasks, and meeting summaries.  
                        - Allows sharing key points via email or messaging.
                    </p>
                </div>

                <div className="feature">
                    <h3>🖥️ User Interface</h3>
                    <p>
                        - Displays transcribed text in real-time.  
                        - Allows editing and managing extracted information.  
                        - Simple and functional UI for ease of use.
                    </p>
                </div>
            </section>

            <footer className="home-footer">
                <p>Empowering professionals to focus on conversations while we handle the details! 🚀</p>
            </footer>
        </div>
    );
};

export default Home;
