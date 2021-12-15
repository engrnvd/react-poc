import {createAction} from "../redux-helper";

export const VideoActionTypes = {
    SELECT_VIDEO: 'SELECT_VIDEO'
};

export const selectVideo = video => (createAction(VideoActionTypes.SELECT_VIDEO, video))
