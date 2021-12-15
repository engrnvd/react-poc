import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const StyledVideoPlayer = styled.div`
    flex-grow: 1;
`
export default function VideoPlayer({children, ...props}) {
    const video = useSelector(state => state.videos.selectedVideo)

    return (
        <StyledVideoPlayer>
            {video.title}
        </StyledVideoPlayer>
    );
}

