import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = ({options, onReady}) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);

    React.useEffect(() => {
        if (!playerRef.current) {
            if (!videoRef.current) return;

            const player = playerRef.current = videojs(videoRef.current, options, () => {
                onReady && onReady(player);
            });
        } else {
            const player = playerRef.current;
            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    React.useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-big-play-centered"/>
        </div>
    );
}

export default VideoJS;
