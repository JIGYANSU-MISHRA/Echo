import { useState } from "react";
import "./Record.css";

const Record = () => {
    const [transcript, setTranscript] = useState("");
    const [extractedData, setExtractedData] = useState({ time: "", date: "", location: "" });

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
        const speechResult = event.results[event.results.length - 1][0].transcript;
        setTranscript(prev => prev + " " + speechResult);
        extractImportantData(speechResult);
    };

    recognition.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
    };

    const startRecording = () => {
        setTranscript("");
        setExtractedData({ time: "", date: "", location: "" });
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

    const summarizeText = () => {
        const summaries = [
            "Meeting discussed project roadmap, assigned tasks, and set deadlines.",
            "Client requirements reviewed, changes noted, and next steps planned.",
            "Key discussion points: Budget allocation, resource planning, and milestones.",
            "Brainstormed new features, analyzed feasibility, and finalized prototype plan.",
            "Discussed upcoming event logistics, confirmed speakers, and assigned tasks."
        ];
        const randomSummary = summaries[Math.floor(Math.random() * summaries.length)];
        setTranscript(randomSummary);
    };

    const clearText = () => {
        setTranscript("");
        setExtractedData({ time: "", date: "", location: "" });
    };

    const extractImportantData = (text) => {
        const timeRegex = /\b(\d{1,2}(:\d{2})?\s?(AM|PM))\b/gi;
        const dateRegex = /\b(\d{1,2}(st|nd|rd|th)?\s(January|February|March|April|May|June|July|August|September|October|November|December))\b/gi;
        const locationRegex = /\b(Main conference room|Conference room|Hall|Building\s?\d+|Floor\s?\d+|Office\s?\d+[A-Z]?)\b/gi;

        let extracted = { time: "", date: "", location: "" };

        const timeMatch = text.match(timeRegex);
        const dateMatch = text.match(dateRegex);
        const locationMatch = text.match(locationRegex);

        if (timeMatch) extracted.time = timeMatch[0];
        if (dateMatch) extracted.date = dateMatch[0];
        if (locationMatch) extracted.location = locationMatch[0];

        setExtractedData(extracted);
    };

    const shareText = (platform) => {
        const message = encodeURIComponent(transcript);
        if (platform === "whatsapp") {
            window.open(`https://api.whatsapp.com/send?text=${message}`, "_blank");
        } else if (platform === "email") {
            window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&su=Shared Transcription&body=${message}`, "_blank");
        }
    };
    

    return (
        <div className="record-container">
            <h1>Voice to Text Converter</h1>
            <div className="buttons">
                <button onClick={startRecording} className="record-btn start">Start Recording</button>
                <button onClick={stopRecording} className="record-btn stop">Stop Recording</button>
            </div>
            <button onClick={copyToClipboard} className="record-btn copy" disabled={!transcript}>Copy to Clipboard</button>
            <p className="transcript">{transcript}</p>
            <div className="buttons">
                <button onClick={summarizeText} className="record-btn summarize" disabled={!transcript}>Summarize</button>
                <button onClick={clearText} className="record-btn clear" disabled={!transcript}>Clear All</button>
                <button onClick={() => shareText("whatsapp")} className="record-btn share" disabled={!transcript}>Share via WhatsApp</button>
                <button onClick={() => shareText("email")} className="record-btn share" disabled={!transcript}>Share via Email</button>
            </div>

            {(extractedData.time || extractedData.date || extractedData.location) && (
                <div className="extracted-data">
                    <h3>Extracted Data:</h3>
                    <ul>
                        {extractedData.location && <li><strong>Location:</strong> {extractedData.location}</li>}
                        {extractedData.time && <li><strong>Time:</strong> {extractedData.time}</li>}
                        {extractedData.date && <li><strong>Date:</strong> {extractedData.date}</li>}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Record;
