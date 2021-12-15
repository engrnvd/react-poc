import React from 'react';
import styled from "styled-components";

const StyledVideoThumb = styled.div`
  flex-shrink: 0;

  img {
    width: 168px;
    height: 94px;
    object-fit: cover;
  }
`
export default function VideoThumbnail({children, video, ...props}) {
    return (
        <StyledVideoThumb>
            <img
                alt={video.title}
                src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${video.thumb}`}
            />
        </StyledVideoThumb>
    );
}

