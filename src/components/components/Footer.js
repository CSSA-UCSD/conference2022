import React from "react";
import socialMedia from "../data/socialMedia";
import SocialIcons from "./SocialIcons";

class Footer extends React.Component {
    render() {
        const socialIconComponent = socialMedia.map(item => < SocialIcons key={item.id} item={item}/>);
        return (
            <footer className="page-footer font-small cyan darken-3" id="social-media">
                <hr></hr>
                <div className="container">
                    <div className="col py-3">
                        <div className="mb-1 d-flex justify-content-center">
                            { socialIconComponent }
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2021 
                    <a href="https://cssa-ucsd.org/"> CSSA at UCSD</a>
                </div>

            </footer>
        );
    }
}

export default Footer;