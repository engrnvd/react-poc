import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectedVideoSelector} from "../../redux/modules/videosSlice";
import VideoThumbnailInfo from "../videos/VideoThumbnailInfo";
import VideoJS from "./VideoJs";

const StyledVideoPlayer = styled.div`
  flex-grow: 1;
  min-width: min(600px, 100%);
`
export default function VideoPlayer({children, ...props}) {
    const video = useSelector(selectedVideoSelector)

    const videoJsOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        sources: video.sources
    }

    return (
        <StyledVideoPlayer>
            <VideoJS options={videoJsOptions}/>
            <VideoThumbnailInfo video={video} size='1.5rem'/>
        </StyledVideoPlayer>
    );
}

