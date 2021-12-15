import {configureStore} from '@reduxjs/toolkit';
import videosReducer from "./modules/videosSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
    },
});

