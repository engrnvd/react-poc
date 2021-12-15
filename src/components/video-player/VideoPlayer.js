import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {loadingVideosSelector, selectedVideoSelector} from "../../redux/modules/videosSlice";
import VideoThumbnailInfo from "../videos/VideoThumbnailInfo";
import VideoJS from "./VideoJs";
import Skeleton from "../base-components/Skeleton";

const StyledVideoPlayer = styled.div`
  flex-grow: 1;
  min-width: min(600px, 100%);
`
export default function VideoPlayer() {
    const video = useSelector(selectedVideoSelector)
    const loading = useSelector(loadingVideosSelector)

    const videoJsOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        sources: video ? video.sources : []
    }

    return (
        <StyledVideoPlayer>
            {
                loading && <Skeleton height="45vw"/>
            }
            {
                !loading && (
                    <>
                        <VideoJS options={videoJsOptions}/>
                        <VideoThumbnailInfo video={video} size='1.5rem'/>
                    </>
                )
            }
        </StyledVideoPlayer>
    );
}

