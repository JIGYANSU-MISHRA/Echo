import "react";
import "./Extraction.css";

const Extraction = () => {
    const meetings = [
        {
            title: "Team Sync",
            date: "2024-02-20",
            duration: "45 min",
            actions: 3,
            details: [
                "Review project progress",
                "Assign tasks for next sprint",
                "Discuss upcoming deadlines"
            ]
        },
        {
            title: "Product Review",
            date: "2024-02-19",
            duration: "60 min",
            actions: 5,
            details: [
                "Analyze user feedback",
                "Plan feature improvements",
                "Check competitor analysis",
                "Discuss UI/UX changes",
                "Assign tasks for redesign"
            ]
        },
        {
            title: "Client Meeting",
            date: "2024-02-18",
            duration: "30 min",
            actions: 2,
            details: [
                "Discuss project milestones",
                "Confirm next delivery date"
            ]
        }
    ];

    return (
        <div className="extraction-container">
            <h1>Action Extraction</h1>
            <p className="subtext">
                Extracted tasks and discussion points from recorded meetings.
            </p>

            {meetings.map((meeting, index) => (
                <div key={index} className="meeting-card">
                    <h2>{meeting.title}</h2>
                    <p className="meeting-info">
                        📅 {meeting.date} | ⏳ {meeting.duration} | ✅ {meeting.actions} actions
                    </p>
                    <ul className="meeting-details">
                        {meeting.details.map((detail, i) => (
                            <li key={i}>🔹 {detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Extraction;
