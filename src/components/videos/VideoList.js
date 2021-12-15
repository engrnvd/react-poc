import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {videosSelector} from "../../redux/modules/videosSlice";
import VideoListItem from "./VideoListItem";

const StyledVideoList = styled.div`
`
export default function VideoList({children, ...props}) {
    const videos = useSelector(videosSelector)
    return (
        <StyledVideoList>
            {
                videos.map((video, i) => (
                    <VideoListItem key={i} video={video}/>
                ))
            }
        </StyledVideoList>
    );
}

