import {useDispatch, useSelector} from "react-redux";
import {setSelectedVideo, videosSelector} from "./redux/modules/videosSlice";
import Header from "./components/layout-components/Header";
import Container from "./components/layout-components/Container";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import GlobalStyles from "./styles/global-styles";

function App() {
    const videos = useSelector(videosSelector)
    const dispatch = useDispatch()
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Header/>
            <Container>
                <div>
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
            </Container>
        </ThemeProvider>
    );
}

export default App;
