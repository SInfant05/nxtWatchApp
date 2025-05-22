import {
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription
} from './styledComponent';
import ThemeContext from '../Contexts/ThemeContext';

const NoSavedVideos = () => (
  <ThemeContext.Consumer>
    {({ isDarkTheme }) => (
      <NoSavedVideosContainer >
        <NoSavedVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <NoSavedVideosHeading $isDarkTheme={isDarkTheme}>No saved videos found</NoSavedVideosHeading>
        <NoSavedVideosDescription $isDarkTheme={isDarkTheme}>
          You can save your videos while watching them
        </NoSavedVideosDescription>
      </NoSavedVideosContainer>
    )}
  </ThemeContext.Consumer>
);
export default NoSavedVideos;