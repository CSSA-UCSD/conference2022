import React from "react";
import AOS from "aos";
import '../../style/main.scss'

class Home extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        return (

            <div>
                <div className="animation">
                </div>

                <div className="container">
                </div>
            </div>
        );
    }
}

export default Home;