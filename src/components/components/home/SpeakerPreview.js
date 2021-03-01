import React from "react";

class SpeakerPreview extends React.Component {

    render() {
        return (
            <div className="carousel-speaker mx-2">
                <a href={`conference2021/#/speakers/#` + this.props.item.id}>
                    <div className="speaker-img pb-3">
                        <img src={ require(`../../../img/speakers/${this.props.item.img}`).default } 
                            alt={this.props.item.name} ></img>
                    </div>
                    <div className="speaker-title">
                        <h5>{this.props.item.name}</h5>
                        <p>{this.props.item.title}</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default SpeakerPreview;

