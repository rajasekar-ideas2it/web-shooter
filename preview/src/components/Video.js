import React from 'react';

function Video({ onTimeUpdate, currentPlaybackTime }) {
    return (
        <div className="h-100 d-flex justify-content-center">
            <video 
                className="h-100"
                controls 
                autoPlay
                src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
                onTimeUpdate={event => onTimeUpdate(event.target.currentTime)}
                id="video"
            />
        </div>
    );
}

export default Video;