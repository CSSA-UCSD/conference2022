import React from "react";
import AOS from "aos";
import '../../style/main.scss'
import { Link } from "react-router-dom";
import DaySchedule from "../components/home/DaySchedule";
import DayScheduleData from "../data/home/DayScheduleData";

class Home extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        const ScheduleComponent = DayScheduleData.map(item => < DaySchedule key={item.id} item={item}/>);

        return (
            <div className="container">
                <div className="row py-5">
                    <div className="home-title col-sm-6 ">
                        <h1>Innovations in Intelligence</h1>
                        <p>The emerging applications of cognitive science in technology, healthcare, and current global issues.</p>
                    </div>

                    <div className="home-img col-sm-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2gY-WmRVRVQ?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="schedule">
                    <Link to='/schedule' className='nav-link'>Schedule</Link>
                    {ScheduleComponent}
                </div>
            </div>
        );
    }
}

export default Home;