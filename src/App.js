import {useDispatch, useSelector} from "react-redux";
import {setSelectedVideo, videosSelector} from "./redux/modules/videosSlice";

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
                            onClick={e => dispatch(setSelectedVideo(video))}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default App;
