import {createSlice} from '@reduxjs/toolkit';
import {videosList} from "../../data/videos-list";

// state
const initialState = {
    videos: videosList,
    selectedVideo: videosList[0],
};

// reducers
export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        setSelectedVideo: (state, {payload}) => {
            state.selectedVideo = payload;
        },
    },
});

// actions
export const {setSelectedVideo} = videosSlice.actions;

// selectors
export const videosSelector = state => state.videos.videos
export const selectedVideoSelector = state => state.videos.selectedVideo

// export slice reducer
export default videosSlice.reducer;
