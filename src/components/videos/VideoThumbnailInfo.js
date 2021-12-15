import React from 'react';
import styled from "styled-components";

const StyledVideoThumbInfo = styled.div`
  padding: 1em;
  font-size: ${({size}) => size || '1rem'};

  .sub-title {
    color: #aaa;
    font-size: 0.75em;
  }
`
export default function VideoThumbnailInfo({children, video, size, ...props}) {
    return (
        <StyledVideoThumbInfo size={size}>
            <div><a href='#'>{video.title}</a></div>
            <div><a className='sub-title' href='#'>{video.subtitle}</a></div>
        </StyledVideoThumbInfo>
    );
}

