import React from "react";
import AOS from "aos";
import '../../style/main.scss'
import { Link } from "react-router-dom";

import DaySchedule from "../components/home/DaySchedule";
import DayScheduleData from "../data/home/DayScheduleData";

import SpeakerPreview from "../components/home/SpeakerPreview";
import SpeakerData from "../data/SpeakerData";

import HomeImg from "../../img/home/homeImg.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class Home extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        const ScheduleComponent = DayScheduleData.map(item => < DaySchedule key={item.id} item={item}/>);
        const SpeakerComponent = SpeakerData.map(item => < SpeakerPreview key={item.id} item={item}/>);
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };

        return (
            <div className="container">
                <div className="row py-5">
                    <div className="home-img col-sm-6">
                        <img src={HomeImg} alt="Home Graphic"></img>
                    </div>
                    <div className="home-title col-sm-6 ">
                        <h2>The emerging applications of cognitive science in technology, healthcare, and current global issues.</h2>
                    </div>
                </div>
                <div className="schedule">
                    <h3><Link to='/schedule' className='nav-link'><span className="header-gradient">Schedule</span></Link></h3>
                    {ScheduleComponent}
                </div>
                <div className="speakers pb-5">
                    <h3><Link to='/speakers' className='nav-link'><span className="header-gradient">Speakers</span></Link></h3>
                    <div className="speakers-carousel">
                        <Carousel 
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        centerMode={true}
                        >
                           {SpeakerComponent}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;