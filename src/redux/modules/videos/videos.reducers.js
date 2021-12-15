import {videosList} from "../../../data/videos-list";
import {VideoActionTypes} from "./videos.actions";

const initialState = {
    videos: videosList,
    selectedVideo: null
}

export const videos = (state = initialState, {type, payload}) => {
    switch (type) {
        case VideoActionTypes.SELECT_VIDEO:
            return {...state, selectedVideo: payload}
        default:
            return state
    }
}
