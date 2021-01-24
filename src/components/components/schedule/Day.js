import React from "react";
import AOS from "aos";


class Day extends React.Component {

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
                    <h4>Day</h4>
                    <h2>Subtitle</h2>
                    {/* <p>{this.props.item.description}</p> */}
                </div>

            </div>
        );
    }
}

export default Day;

