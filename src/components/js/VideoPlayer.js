import React, { useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faPause, faPlay, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import '../css/VideoPlayer.css';

function VideoPlayer(props) {
    const defaultVolume = 20;
    const [volume, setVolume] = useState(defaultVolume);
    const videoPlayer = useRef(null);
    const volumeSlider = useRef(null)
    const thumbnailImage = props.thumbnailSrc;
    const videoSrc = props.videoSrc;
    const [isPlaying, setIsPlaying] = useState(props.autoPlay);
    const changeAudioWithFullscreen = true;
    const [volumeIcon, setVolumeIcon] = useState(faVolumeHigh);

    useEffect(() => {
        if (videoPlayer.current) {
            videoPlayer.current.volume = volume / 100;
        }
    }, [volume]);

    function changeVolume(e) {
        const newVolume = e.target.value / 100;
        const isMuted = newVolume <= 0;
        setVolume(isMuted ? 0 : e.target.value);
        videoPlayer.current.muted = isMuted;
        videoPlayer.current.volume = isMuted ? 0 : newVolume;
        setVolumeIcon(isMuted ? faVolumeMute : faVolumeHigh);
    }

    function toggleMuted() {
        const currentlyMuted = videoPlayer.current.muted;
        videoPlayer.current.muted = !currentlyMuted;
        setVolumeIcon(currentlyMuted ? faVolumeHigh: faVolumeMute);
        if(volume < 10) setVolume(defaultVolume);
    }

    function handleSoundHover(isHover) {
        console.log(isHover)
        if(isHover) volumeSlider.current.classList.add("on-hover")
        else volumeSlider.current.classList.remove("on-hover");
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
                    <div className='sound-controls'
                        onMouseEnter={() => handleSoundHover(true)}
                        onMouseLeave={() => handleSoundHover(false)}>
                        <span onClick={toggleMuted} className='volume-icon'>
                            <FontAwesomeIcon icon={volumeIcon} />
                        </span>
                        <input className='volume-slider' type='range' orient='vertical' min={-1} max={100} value={volume} onChange={(e) => changeVolume(e)} ref={volumeSlider} />
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