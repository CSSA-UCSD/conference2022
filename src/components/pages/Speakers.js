import React from "react";

import AOS from "aos";

class Events extends React.Component {
    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        return (
            <div className="speakers">
                <div className="container py-5">
                    <div className="speakers-title">
                        <h4>Innovations in Intelligence</h4>
                        <h1>Speakers</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;