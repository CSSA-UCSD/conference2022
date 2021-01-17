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
            <div className="container events">
            </div>
        );
    }
}

export default Events;