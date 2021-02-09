import React from "react";
import AOS from "aos";

import Speaker from "../components/speakers/Speaker"
import SpeakerPreview from "../components/home/SpeakerPreview";
import SpeakerData from "../data/SpeakerData";

class Events extends React.Component {
    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        const SpeakerComponent = SpeakerData.map(item => < Speaker key={item.id} item={item}/>);

        return (
            <div className="speakers">
                <div className="container py-5">
                    <div className="speakers-title header-gradient pt-5">
                        <h4>Innovations in Intelligence</h4>
                        <h1 className="pb-5">Speakers</h1>
                    </div>
                    <div className="container row">
                        {SpeakerComponent}
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;