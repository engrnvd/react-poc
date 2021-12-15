import {createSlice} from '@reduxjs/toolkit';
import {videosList} from "../../data/videos-list";
import {PlaybackTimeHelper} from "../../helpers/PlaybackTimeHelper";

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
        savePlaybackTime: (state, {payload}) => {
            if (state.selectedVideo) {
                PlaybackTimeHelper.save(state.selectedVideo.id, payload)
            }
        },
    },
});

// actions
export const {setSelectedVideo, savePlaybackTime} = videosSlice.actions;

// selectors
export const videosSelector = state => state.videos.videos
export const selectedVideoSelector = state => state.videos.selectedVideo

// export slice reducer
export default videosSlice.reducer;
