import { useState } from "react";
import "./Record.css";

const Record = () => {
    const [transcript, setTranscript] = useState("");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        setTranscript(speechResult);
    };

    recognition.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
    };

    const startRecording = () => {
        setTranscript("");
        recognition.start();
    };

    const stopRecording = () => {
        recognition.stop();
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(transcript)
            .then(() => alert("Copied to clipboard!"))
            .catch(err => console.error("Error copying text: ", err));
    };

    return (
        <div className="record-container">
            <h1>Voice to Text Converter</h1>
            <div className="buttons">
                <button onClick={startRecording} className="record-btn start">Start Recording</button>
                <button onClick={stopRecording} className="record-btn stop">Stop Recording</button>
                <button onClick={copyToClipboard} className="record-btn copy" disabled={!transcript}>Copy to Clipboard</button>
            </div>
            <p className="transcript">{transcript}</p>
        </div>
    );
};

export default Record;
