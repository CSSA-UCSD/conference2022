import React from "react";
import '../../style/main.scss';
import Day from "../components/schedule/Day";
import Event from "../components/schedule/Event";

class Team extends React.Component {
    render() {
        return (
            <div className="schedule">
                <div className="container py-5">
                    <div className="schedule-title">
                        <h4>Innovations in Intelligence</h4>
                        <h1>Schedule</h1>
                        <Day />
                        <Event />
                    </div>

                </div>
            </div>
        );
    }
}

export default Team;