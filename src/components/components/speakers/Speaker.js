import React from "react";
import AOS from "aos";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Speaker extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        return (
            <div className="speaker col-md-4 py-3" data-aos="fade-up" id={this.props.item.id}>
                <div className="speaker-img pb-3">
                    <img src={ require(`../../../img/speakers/${this.props.item.img}`).default } 
                        alt={this.props.item.name} ></img>
                </div>
                <div className="speaker-title">
                    <h5>{this.props.item.name}</h5>
                    {/* <p>{this.props.item.title}</p> */}
                    <p>{this.props.item.event}</p>
                </div>
                <Popup
                    trigger={<button className="button"> Open Modal </button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> <h5>{this.props.item.name}</h5></div>
                        <div className="content">
                            <p>{this.props.item.bio}</p>
                        </div>
                    </div>
                    )}
                </Popup> 
            </div>
        );
    }
}

export default Speaker;