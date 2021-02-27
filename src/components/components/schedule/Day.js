import React from "react";
import AOS from "aos";

import Event from "../../components/schedule/Event";
import EventData from "../../data/event/EventData";

class Day extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        const Day1Component = EventData.filter(item => item.day === 1).map(item => < Event key={item.id} item={item}/>);
        const Day2Component = EventData.filter(item => item.day === 2).map(item => < Event key={item.id} item={item}/>);
        const Day3Component = EventData.filter(item => item.day === 3).map(item => < Event key={item.id} item={item}/>);

        return (
            <div className="day-schedule pb-5" data-aos="fade-up">
                <div className="day-img">
                </div>
                <div className="day-info">
                    <div className="schedule-title header-gradient">
                        <h1>Day 1</h1>
                    </div>
                    {/* <p>{this.props.item.description}</p> */}
                    {Day1Component}
                </div>
                <div className="day-info">
                    <div className="schedule-title header-gradient">
                        <h1>Day 2</h1>
                    </div>
                    {/* <p>{this.props.item.description}</p> */}
                    {Day2Component}
                </div>
                <div className="day-info">
                    <div className="schedule-title header-gradient">
                        <h1>Day 3</h1>
                    </div>
                    {/* <p>{this.props.item.description}</p> */}
                    {Day3Component}
                </div>

            </div>
        );
    }
}

export default Day;

