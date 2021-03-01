import React from "react";
import { Link } from "react-router-dom";

class SpeakerPreview extends React.Component {

    render() {
        return (
            <div className="carousel-speaker mx-2">
                <Link to={'/speakers/#' + this.props.item.id} className='nav-link'>
                {/*
                <a href={`#/speakers/#` + this.props.item.id}>
                */}
                    <div className="speaker-img pb-3">
                        <img src={ require(`../../../img/speakers/${this.props.item.img}`).default } 
                            alt={this.props.item.name} ></img>
                    </div>
                    <div className="speaker-title">
                        <h5>{this.props.item.name}</h5>
                        <p>{this.props.item.title}</p>
                    </div>
                {/*
                </a>
                */}
                </Link>
            </div>
        );
    }
}

export default SpeakerPreview;

