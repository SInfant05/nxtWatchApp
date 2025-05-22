import ReactPlayer from "react-player";
import ThemeContext from "../Contexts/ThemeContext";
import { VideoContainer, ResponsiveContainer } from "./styledComponent";

const RPlayer = ({ videoUrl }) => (
  <ThemeContext.Consumer>
    {({ isDarkTheme }) => (
      <VideoContainer $isDarkTheme={isDarkTheme}>
        <ResponsiveContainer $isDarkTheme={isDarkTheme}>
          <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
        </ResponsiveContainer>
      </VideoContainer>
    )}
  </ThemeContext.Consumer>
);
export default RPlayer;
