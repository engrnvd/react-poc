import {createSlice} from '@reduxjs/toolkit';
import {setSelectedVideo} from "./videosSlice";

// state
const initialState = {
    playing: false,
};

// reducers
export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlaying: (state, {payload}) => {
            state.playing = payload;
        },
    },
});

// actions
export const {
    setPlaying,
} = playerSlice.actions;

export const play = (video) => (dispatch, getState) => {
    if (video) {
        dispatch(setSelectedVideo(video))
    }
    const playing = playingSelector(getState())
    !playing && dispatch(setPlaying(true))
}

export const pause = () => (dispatch) => {
    dispatch(setPlaying(false))
}

// selectors
export const playingSelector = state => state.player.playing

// export slice reducer
export default playerSlice.reducer;
