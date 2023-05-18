import React from 'react';
import '../css/WelcomeBox.css';

function WelcomeBox() {
    //Todo, Add a play button next to the figure, which will fade in too a video. The same button can be used to pause the video and it will fade back to the thumbnail image.
    return (
        <section className='welcome-box'>
            <h2> Hello and welcome to my portfolio!</h2>
            <p>
                I’m Koen Hankel, I’m a gamedeveloper with webdevelopment knowledge. I’m currently a CMGT student at Saxion University of Applied Sciences.<br/>
                While I enjoy making games, I also enjoy making websites. I decided to make an awesome portfolio to show off my awesome projects I’ve worked on.
                With my portfolio I would like to showcase my web development skills, this portfolio is 100% made in React.<br/>
                If you want to know more about me or my past, you can find me on <a href='https://www.linkedin.com/in/koen-hankel/'>LinkedIn.</a></p>

        </section>
    );
}


export default WelcomeBox;





