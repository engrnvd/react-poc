import React from 'react';
import styled from "styled-components";
import VideoThumbnail from "./VideoThumbnail";
import VideoThumbnailInfo from "./VideoThumbnailInfo";

const StyledVideoListItem = styled.div`
  display: flex;
`
export default function VideoListItem({children, video, ...props}) {
    return (
        <StyledVideoListItem>
            <VideoThumbnail video={video}/>
            <VideoThumbnailInfo video={video}/>
        </StyledVideoListItem>
    );
}

