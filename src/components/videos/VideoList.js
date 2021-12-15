import React, {useEffect} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {loadingVideosSelector, loadVideos, videosSelector} from "../../redux/modules/videosSlice";
import VideoListItem from "./VideoListItem";
import Skeleton from "../base-components/Skeleton";

const StyledVideoList = styled.div`
  width: 350px;
`
export default function VideoList({children, ...props}) {
    const videos = useSelector(videosSelector)
    const dispatch = useDispatch()
    const loading = useSelector(loadingVideosSelector)

    useEffect(() => {
        dispatch(loadVideos())
    }, [])

    return (
        <StyledVideoList>
            {
                loading && (
                    <>
                        <Skeleton height="8rem"/>
                        <Skeleton height="8rem"/>
                        <Skeleton height="8rem"/>
                        <Skeleton height="8rem"/>
                        <Skeleton height="8rem"/>
                        <Skeleton height="8rem"/>
                    </>
                )
            }
            {
                videos.map((video) => (
                    <VideoListItem key={video.id} video={video}/>
                ))
            }
        </StyledVideoList>
    );
}

