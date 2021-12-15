import React from 'react';
import styled from "styled-components";
import {setSelectedVideo} from "../../redux/modules/videosSlice";
import {useDispatch} from "react-redux";

const StyledVideoThumb = styled.div`
  flex-shrink: 0;

  img {
    width: 168px;
    height: 94px;
    object-fit: cover;
    cursor: pointer;
  }
`
export default function VideoThumbnail({children, video, ...props}) {
    const dispatch = useDispatch()

    return (
        <StyledVideoThumb>
            <img
                alt={video.title}
                src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${video.thumb}`}
                onClick={e => dispatch(setSelectedVideo(video))}
            />
        </StyledVideoThumb>
    );
}

