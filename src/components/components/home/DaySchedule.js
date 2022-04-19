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
                            {
                                this.props.item.event1 && this.props.item.eventTime1 &&
                                <p><span>{this.props.item.eventTime1}</span> {this.props.item.event1}</p>
                            }
                            {
                                this.props.item.event2 && this.props.item.eventTime2 &&
                                <p><span>{this.props.item.eventTime2}</span> {this.props.item.event2}</p>
                            }
                            {
                                this.props.item.event3 && this.props.item.eventTime3 &&
                                <p><span>{this.props.item.eventTime3}</span> {this.props.item.event3}</p>
                            }
                            {
                                this.props.item.event4 && this.props.item.eventTime4 &&
                                <p><span>{this.props.item.eventTime4}</span> {this.props.item.event4}</p>
                            }
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default DaySchedule;

