import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faPause, faPlay, faVolumeXmark} from '@fortawesome/free-solid-svg-icons';
import '../css/VideoPlayer.css';

function VideoPlayer(props) {
    const [volume, setVolume] = useState(50);
    const videoPlayer = useRef(null);
    const thumbnailImage = props.thumbnailSrc;
    const videoSrc = props.videoSrc;
    const videoControls = useRef(null); // Create a ref for video controls
    const [isPlaying, setIsPlaying] = useState(props.autoPlay);
    const changeAudioWithFullscreen = true;

    function changeVolume(e) {
        setVolume(e.target.value);
        videoPlayer.current.volume = volume / 100;
    }

    const handlePlayPause = () => {
        const videoElement = videoPlayer.current;
        videoElement.paused ? videoElement.play() : videoElement.pause();
        setIsPlaying(!videoElement.paused);
    };

    const handleFullScreen = () => {
        const videoElement = videoPlayer.current;
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
            videoElement.msRequestFullscreen();
        }
        document.addEventListener('fullscreenchange', handleFullScreenChange);
        document.addEventListener('mozfullscreenchange', handleFullScreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
        document.addEventListener('MSFullscreenChange', handleFullScreenChange);
    };

    const handleFullScreenChange = () => {
        const fullscreenElement =
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement;
        if (changeAudioWithFullscreen) {
            videoPlayer.current.muted = !fullscreenElement;
            videoPlayer.current.volume = fullscreenElement ? 0.25 : 0;
        }
        if (!fullscreenElement) RemoveListeners();
    }

    function RemoveListeners() {
        document.removeEventListener('fullscreenchange', handleFullScreenChange);
        document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
        document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
        document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
    }

    return (
        <div className='video-player-container' style={{ backgroundImage: `url(${thumbnailImage})` }}>
            <div className='video-player'>
                <video
                    poster={thumbnailImage}
                    src={videoSrc}
                    width={"100%"}
                    height={"100%"}
                    ref={videoPlayer}
                    onClick={handlePlayPause}
                />
                <section className='video-player-controls'>
                    <div className='sound-controls'>
                        <span>
                            <FontAwesomeIcon icon={faVolumeXmark} />
                        </span>
                        <input className='volume-slider' type='range' orient='vertical' min={0} max={100} value={volume} onChange={(e) => changeVolume(e)} />
                    </div>
                    <div className='misc-controls'>
                        <span onClick={handlePlayPause}>
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                        </span>
                        <span onClick={handleFullScreen} style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faExpand} />
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default VideoPlayer;

VideoPlayer.propTypes = {
    videoSrc: PropTypes.string,
    thumbnailSrc: PropTypes.string,
    autoPlay: PropTypes.bool,
};