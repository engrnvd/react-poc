import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectedVideoSelector} from "../../redux/modules/videosSlice";

const StyledVideoPlayer = styled.div`
    flex-grow: 1;
`
export default function VideoPlayer({children, ...props}) {
    const video = useSelector(selectedVideoSelector)

    return (
        <StyledVideoPlayer>
            {video.title}
        </StyledVideoPlayer>
    );
}

