import React from "react";
import AOS from "aos";
//import Testing from "../../../img/Test/testimg.JPG";


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
                        {/*
                        <div className="day-img col-4">
                            <img src={Testing} alt="test"></img> 
                        </div>
                        */}
                        {/* <div className="day-info col-8"> */}
                        <div className="day-info">
                            <h4>{this.props.item.date}</h4>
                            <h2>{this.props.item.name}</h2>
                            {/* 
                            <p>{this.props.item.description}</p>
                            */}
                            <p><span>5-5:50 PM PST</span> {this.props.item.event1}</p>
                            <p><span>5:50-6:20 PM PST </span>{this.props.item.event2}</p>
                            <p><span>6:20-7:10 PM PST </span>{this.props.item.event3}</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default DaySchedule;

