import React, {useRef, useEffect} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import {useDispatch, useSelector} from "react-redux";
import {pause, play, playingSelector} from "../../redux/modules/playerSlice";
import {savePlaybackTime, selectedVideoSelector} from "../../redux/modules/videosSlice";
import {PlaybackTimeHelper} from "../../helpers/PlaybackTimeHelper";

export const VideoJS = ({options, onReady}) => {
    const videoRef = useRef(null)
    const playerRef = useRef(null)
    const playbackIntervalRef = useRef(null)
    const dispatch = useDispatch()
    const playing = useSelector(playingSelector)
    const currentVideo = useSelector(selectedVideoSelector)

    useEffect(() => {
        if (!playerRef.current) {
            if (!videoRef.current) return

            const player = playerRef.current = videojs(videoRef.current, options, () => {
                onReady && onReady(player)
                player.on('play', () => {
                    dispatch(play())
                })

                player.on('pause', () => {
                    dispatch(pause())
                })

                player.on('loadedmetadata', function () {
                    let time = PlaybackTimeHelper.get(currentVideo.id)
                    if (player.duration() - time > PlaybackTimeHelper.SAVE_INTERVAL)
                        player.currentTime(time)
                })
            })
        } else {
            const player = playerRef.current
            player.autoplay(options.autoplay || playing)
            player.src(options.sources)

        }
    }, [options])

    // listen to external play / pause commands
    useEffect(() => {
        const player = playerRef.current
        playing ? player.play() : player.pause()
    }, [playing])

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        const player = playerRef.current

        return () => {
            if (player) {
                player.dispose()
                playerRef.current = null
            }
            if (playbackIntervalRef.current) {
                clearInterval(playbackIntervalRef.current)
                playbackIntervalRef.current = null
            }
        };
    }, [playerRef])

    useEffect(() => {
        if (!playbackIntervalRef.current)
            playbackIntervalRef.current = setInterval(() => {
                let time = playerRef.current.currentTime()
                if (time > 0) dispatch(savePlaybackTime(time))
            }, PlaybackTimeHelper.SAVE_INTERVAL * 1000)
    }, [])

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-big-play-centered"/>
        </div>
    );
}

export default VideoJS
