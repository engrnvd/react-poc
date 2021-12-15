import {useDispatch, useSelector} from "react-redux";
import {videosSelector} from "./redux/modules/videos/videos.selectors";
import {selectVideo} from "./redux/modules/videos/videos.actions";

function App() {
    const videos = useSelector(videosSelector)
    const dispatch = useDispatch()
    return (
        <div className="App">
            {
                videos.map((video, i) => (
                    <div key={i}>
                        <img
                            alt={video.title}
                            src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${video.thumb}`}
                            onClick={e => dispatch(selectVideo(video))}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default App;
