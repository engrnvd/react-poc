import {configureStore} from '@reduxjs/toolkit';
import videosReducer from "./modules/videosSlice";
import playerReducer from "./modules/playerSlice";
import {logger} from "redux-logger";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        player: playerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

