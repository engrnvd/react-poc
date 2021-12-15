import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {videosSelector} from "../../redux/modules/videosSlice";
import VideoListItem from "./VideoListItem";

const StyledVideoList = styled.div`
    max-width: 350px;
`
export default function VideoList({children, ...props}) {
    const videos = useSelector(videosSelector)
    return (
        <StyledVideoList>
            {
                videos.map((video) => (
                    <VideoListItem key={video.id} video={video}/>
                ))
            }
        </StyledVideoList>
    );
}

