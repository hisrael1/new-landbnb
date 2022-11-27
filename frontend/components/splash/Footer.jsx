import React from 'react';

const Footer = () => {

    return (
        <div id="footer">
            <div>
                <div className="personal-links">
                    <div id="developed-by"> Developed By Harrison Israel </div>
                    <a href="https://github.com/hisrael1"> <img className="footer-img" src={window.github}/> </a>
                    <a href="https://www.linkedin.com/in/harrison-israel/"> <img className="footer-img" src={window.linkedin}/> </a>
                </div>                
            </div>
        </div>
    )
}

export default Footer;
