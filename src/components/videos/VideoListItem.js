import React from 'react';
import styled from "styled-components";
import VideoThumbnail from "./VideoThumbnail";
import VideoThumbnailInfo from "./VideoThumbnailInfo";
import {useDispatch, useSelector} from "react-redux";
import {selectedVideoSelector} from "../../redux/modules/videosSlice";
import {play} from "../../redux/modules/playerSlice";

const StyledVideoListItem = styled.div`
  display: flex;
  margin: 0.25em 0;
  background-color: ${({selected, theme}) => selected ? theme.colors.selectedBg : 'transparent'};
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }
`
export default function VideoListItem({children, video, ...props}) {
    const selected = useSelector(selectedVideoSelector)
    const dispatch = useDispatch()

    return (
        <StyledVideoListItem selected={video === selected} onClick={e => dispatch(play(video))}>
            <VideoThumbnail video={video}/>
            <VideoThumbnailInfo video={video}/>
        </StyledVideoListItem>
    );
}

