import React from "react";
import AOS from "aos";


class Speaker extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {


        return (
            <div className="speaker col-md-4 py-3" data-aos="fade-up">
                <div className="speaker-img pb-3">
                    <img src={ require(`../../../img/speakers/${this.props.item.img}`).default } 
                        alt={this.props.item.name} ></img>
                </div>
                <div className="speaker-title">
                    <h5>{this.props.item.name}</h5>
                    <p>{this.props.item.title}</p>
                </div>
            </div>
        );
    }
}

export default Speaker;