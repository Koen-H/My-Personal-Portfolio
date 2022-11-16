import React from 'react';
// import PropTypes from 'prop-types';
import '../css/WelcomeBox.css';
// import me from '../../images/me.jpg';


function WelcomeBox() {
    return (
        <section>
            <h2>Welcome!</h2>
            <div className='welcome-box'>
                <div className='welcome-picture'>
                    <img />
                </div>
                <div className='welcome-text'>

                    Hello and welcome to my portfolio!<br /><br />

                    I’m Koen Hankel, I’m a gamedeveloper with webdevelopment knowledge. I’m currently a CMGT student at Saxion University of Applied Sciences.<br/>
                    I’ve spent a lot of time on this portfolio and hope you will like it. If you want to try out a different theme you can do that in the top left.<br/>
                </div>
            </div>
        </section>
    );
}


WelcomeBox.propTypes = {

};

export default WelcomeBox;