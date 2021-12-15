import Header from "./components/layout-components/Header";
import Container from "./components/layout-components/Container";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import GlobalStyles from "./styles/global-styles";
import VideoList from "./components/videos/VideoList";
import VideoPlayer from "./components/video-player/VideoPlayer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Header/>
            <Container>
                <VideoPlayer/>
                <VideoList/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
