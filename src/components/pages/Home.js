import React from "react";
import AOS from "aos";
import '../../style/main.scss'
import { Link } from "react-router-dom";

import DaySchedule from "../components/home/DaySchedule";
import DayScheduleData from "../data/home/DayScheduleData";

import SpeakerPreview from "../components/home/SpeakerPreview";
import SpeakerData from "../data/SpeakerData";

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
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
              }
          };
          const ButtonGroup = ({ next, previous}) => {
            return (
                <div className="custom-button-group row d-flex">
                    <div className="speakers-home-link mr-auto align-self-center">
                        <h3><Link to='/speakers' className='nav-link'><span className="header-gradient">Speakers</span></Link></h3>
                    </div>
                    <div className="buttons pr-3">
                        <button className="pr-3 carousel-arrows" onClick={() => previous()}><p>&#8249;</p></button>
                        <button className="carousel-arrows" onClick={() => next()}><p>&#8250;</p></button>
                    </div>
                </div>
              );
          };

        return (
            <div className="home container">
                <div className="row py-5">
                    <div className="home-img col-sm-6 d-flex align-items-center">
                        <svg width="447" height="447" viewBox="0 0 447 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M341.243 365.407C338.235 370.305 334.931 378.89 344.594 383.467C356.558 389.134 369.152 358.909 376.507 345.887" stroke="white" strokeWidth="8.10409" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M323.223 252.362C257.06 358.35 270.793 378.506 313.697 316.361C365.709 241.024 332.002 317.297 332.002 317.297" stroke="white" strokeWidth="8.10409" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M325.158 328.55C325.158 328.55 280.528 413.207 333.331 342.964C399.335 255.16 349.582 347.931 345.651 355.284" stroke="white" strokeWidth="8.10409" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="341.133" cy="363.582" r="2.6716" transform="rotate(-45 341.133 363.582)" fill="white"/>
                            <circle cx="375.811" cy="346.231" r="10.9011" transform="rotate(-45 375.811 346.231)" fill="white"/>
                            <circle cx="323.137" cy="330.814" r="8.17581" transform="rotate(-45 323.137 330.814)" fill="white"/>
                            <path d="M311.019 232.449C311.019 232.449 294.988 222.793 280.02 158.73C280.02 158.73 266.55 114.576 251.169 96.4007C231.749 73.4524 211.719 60.8682 194.013 54.1665" stroke="white" strokeWidth="10.8055" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="325.794" cy="247.222" r="10.9011" transform="rotate(-45 325.794 247.222)" fill="white"/>
                            <path d="M49.2226 137.874C49.2226 137.874 32.5847 196.788 96.6032 250.965C114.778 266.346 158.932 279.816 158.932 279.816C222.995 294.784 247.325 322.001 247.325 322.001L255.593 330.269" stroke="white" strokeWidth="10.8055" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="256.415" cy="332.011" r="10.9011" transform="rotate(-45 256.415 332.011)" fill="white"/>
                            <path d="M57.3662 112.403C57.3662 112.403 69.4422 75.3594 105.114 58.9518C140.786 42.5441 169.058 49.3756 169.058 49.3756" stroke="white" strokeWidth="10.8055" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="169.061" cy="49.3763" r="10.9011" transform="rotate(-45 169.061 49.3763)" fill="white"/>
                            <path d="M124.093 176.558C126.931 179.396 126.931 183.998 124.093 186.836C121.255 189.674 116.653 189.674 113.815 186.836C110.977 183.998 110.977 179.396 113.815 176.558C116.653 173.72 121.255 173.72 124.093 176.558Z" fill="white"/>
                            <circle cx="158.781" cy="180.413" r="7.26739" transform="rotate(-45 158.781 180.413)" fill="white"/>
                            <circle cx="165.207" cy="202.255" r="7.26739" transform="rotate(-45 165.207 202.255)" fill="white"/>
                            <circle cx="138.484" cy="141.633" r="7.26739" transform="rotate(-45 138.484 141.633)" fill="white"/>
                            <circle cx="170.344" cy="132.88" r="7.26739" transform="rotate(-45 170.344 132.88)" fill="white"/>
                            <circle cx="197.323" cy="118.748" r="7.26739" transform="rotate(-45 197.323 118.748)" fill="white"/>
                            <path d="M234.286 217.813L234.267 184.748L215.482 165.963L203.153 165.956L172.311 135.115M234.286 217.813L239.333 222.86M234.286 217.813L225.008 217.808M239.333 222.86L262.984 246.511L300.607 263.411M239.333 222.86L202.905 222.839M202.905 222.839L193.933 213.867L171.783 191.717L163.372 183.306M202.905 222.839L184.971 222.828L168.429 206.286M198.608 120.032L225.004 146.428L225.008 164.287L225.008 217.808M225.008 217.808L214.671 217.802L193.082 196.213L193.071 176.038L170.08 153.047L152.148 155.278L139.104 142.234" stroke="white" strokeWidth="5.40273" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M119.769 182.445L131.098 193.774L131.112 216.978L145.937 231.804L162.152 231.813M162.152 231.813L230.366 231.853L254.194 255.681L264.906 285.531M162.152 231.813L142.571 212.232M275.617 315.382L264.906 285.531M264.906 285.531L274.406 263.92" stroke="white" strokeWidth="5.40273" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                    <div className="home-title col-sm-6 ">
                        <h2>The emerging applications of <span className="home-header-gradient">cognitive science</span> in <span className="home-header-gradient">technology,</span> <span className="home-header-gradient">healthcare,</span> and current <span className="home-header-gradient">global issues</span>.</h2>
                    </div>
                </div>
                <div className="home-intro-video py-5">
                    <iframe title="conference-2021" width="100%" height="500" src="https://www.youtube.com/embed/5zkvrU56nJI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="schedule">
                    <h3><Link to='/schedule' className='nav-link'><span className="header-gradient">Schedule</span></Link></h3>
                    {ScheduleComponent}
                </div>
                <div className="speakers pb-5">
                    <div className="speakers-carousel">
                        <Carousel 
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        centerMode={true}
                        arrows={false}
                        renderButtonGroupOutside={true} 
                        customButtonGroup={<ButtonGroup />}
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