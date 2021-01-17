import React from "react";
import AOS from "aos";

class Involvement extends React.Component {
    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }
    render() {
        return (
            <div className="container involvement">
                <div className="row">
                    <div className="col-sm-8 order-sm-2 involvement-intro">
                        <h1>Get Involved</h1>
                    </div>
                </div>
                <div className="row involvement-cards">
                </div>
            </div>
        );
    }
}

export default Involvement;