import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {mockLoadVideos} from "../../data/videos-list";
import {PlaybackTimeHelper} from "../../helpers/PlaybackTimeHelper";

// state
const initialState = {
    videos: [],
    selectedVideo: null,
    loadingVideos: true,
};

// reducers
export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        setSelectedVideo: (state, {payload}) => {
            state.selectedVideo = payload
        },
        setLoadingVideos: (state, {payload}) => {
            state.loadingVideos = payload
        },
        savePlaybackTime: (state, {payload}) => {
            if (state.selectedVideo) {
                PlaybackTimeHelper.save(state.selectedVideo.id, payload)
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadVideos.pending, (state) => {
            state.loadingVideos = true
        }).addCase(loadVideos.fulfilled, (state, {payload}) => {
            state.loadingVideos = false
            state.videos = payload
            state.selectedVideo = payload[0]
        });
    },
});

// actions
export const {setSelectedVideo, savePlaybackTime, setLoadingVideos} = videosSlice.actions;
export const loadVideos = createAsyncThunk(
    'videos/load',
    async () => {
        const response = await mockLoadVideos()
        return response.data;
    }
);

// selectors
export const videosSelector = state => state.videos.videos
export const loadingVideosSelector = state => state.videos.loadingVideos
export const selectedVideoSelector = state => state.videos.selectedVideo

// export slice reducer
export default videosSlice.reducer;
