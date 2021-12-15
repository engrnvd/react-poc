import React from 'react';
import styled from "styled-components";
import VideoThumbnail from "./VideoThumbnail";

const StyledVideoListItem = styled.div`
  display: flex;

  .video-info {
    padding: 1em;
    max-width: 12rem;
    
    .sub-title {
      color: #aaa;
      font-size: 0.75em;
    }
  }
`
export default function VideoListItem({children, video, ...props}) {
    return (
        <StyledVideoListItem>
            <VideoThumbnail video={video}/>
            <div className='video-info'>
                <div><a href='#'>{video.title}</a></div>
                <div><a className='sub-title' href='#'>{video.subtitle}</a></div>
            </div>
        </StyledVideoListItem>
    );
}

