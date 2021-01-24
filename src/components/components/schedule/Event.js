import React from "react";
import AOS from "aos";


class Event extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {


        return (
            <div className="day-schedule pb-5" data-aos="fade-up">
                <div className="day-img">
                </div>
                <div className="day-info">
                    <h4>{this.props.item.date}</h4>
                    <h2>{this.props.item.name}</h2>
                    <p>{this.props.item.description}</p>
                </div>

            </div>
        );
    }
}

export default Event;

