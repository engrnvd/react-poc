import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pause, play, playingSelector} from "../../redux/modules/playerSlice";

export default function TogglePlayBtn({children, ...props}) {
    const playing = useSelector(playingSelector)
    const dispatch = useDispatch()

    const toggle = (e) => {
        playing ? dispatch(pause()) : dispatch(play())
        e.preventDefault()
    }

    const html = () => ({__html: playing ? "<b>&#8545;</b>" : "&#9658;"})

    return (
        <a href='#' onClick={toggle} dangerouslySetInnerHTML={html()}></a>
    );
}

