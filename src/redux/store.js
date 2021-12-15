import {configureStore} from '@reduxjs/toolkit';
import videosReducer from "./modules/videosSlice";
import playerReducer from "./modules/playerSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        player: playerReducer,
    },
});

