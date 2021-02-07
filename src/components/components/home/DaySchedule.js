import React from "react";
import AOS from "aos";
import Testing from "../../../img/Test/testimg.JPG";


class DaySchedule extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {


        return (
            <div className="day-schedule pb-5" data-aos="fade-up">
                <div className="day-schedule-content">
                    <div className="p-4 row container">
                        <div className="day-img col-4">
                            <img src={Testing} alt="test"></img>
                        </div>
                        <div className="day-info col-8">
                            <h4>{this.props.item.date}</h4>
                            <h2>{this.props.item.name}</h2>
                            <p>{this.props.item.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default DaySchedule;

