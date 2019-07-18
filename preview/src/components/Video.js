import React from 'react';

function Video({ onTimeUpdate }) {
    return (
        <div>
            <video 
                className="w-100"
                controls 
                autoPlay
                src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
                onTimeUpdate={event => onTimeUpdate(event.target.currentTime)}
            />
        </div>
    );
}

export default Video;