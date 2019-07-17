import React from 'react';

function Video() {
    return (
        <div>
            <video controls style={{width:"100%"}}>
              <source src="movie.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default Video;