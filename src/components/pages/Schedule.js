import React from "react";
import '../../style/main.scss';
import Day from "../components/schedule/Day";
import Event from "../components/schedule/Event";

class Team extends React.Component {
    render() {
        return (
            <div className="schedule pt-5">
                <div className="container py-5">
                    <div className="schedule-title header-gradient">
                        <h4>Innovations in Intelligence</h4>
                        <h1 className="pb-5">Schedule</h1>
                    </div>
                    <Day />
                    <Event />

                </div>
            </div>
        );
    }
}

export default Team;