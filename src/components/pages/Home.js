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

import IconSVG from '../../assets/conference icon 2022.svg';

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
                        <img src={IconSVG} alt="conference icon"/>
                    </div>
                    <div className="home-title col-sm-6 ">
                        <h2>Evolutions in <span className="home-header-gradient">technology</span>, <span className="home-header-gradient">healthcare</span>, and current <span className="home-header-gradient">global issues</span> within the cognitive science chrysalis.</h2>
                    </div>
                </div>
                <div className="home-intro-video py-5">
                    <iframe title="conference-2022" width="100%" height="500" src="https://www.youtube.com/embed/Gx60wEdPc7w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="schedule">
                    <h3><Link to='/schedule' className='nav-link'><span className="header-gradient">Schedule</span></Link></h3>
                    {ScheduleComponent}
                </div>
                {/* <div className="speakers pb-5">
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
                </div> */}
                <div className="speakers">
                    <div className="container py-5">
                        <div className="speakers-title header-gradient pt-5">
                            <h1 className="">Speakers</h1>
                            <p className="px-5">Soon to be released!</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;