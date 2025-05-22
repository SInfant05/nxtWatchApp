import { Component } from "react";
import ThemeContext from "../Contexts/ThemeContext";

import TrendingVideoItem from "../TrendingVideoItem";

import { MdOutlinePlaylistAdd } from "react-icons/md";
import NoSavedVideos from "../NoSavedVideos";
import {
  TrendingVideosContainer,
  TrendingTitleContainer,
  TrendingIcon,
  TrendingTitle,
  TrendingVideosList,
} from "./styledComponent";

class SavedVideos extends Component {
  successView = (videosList) => {
    return (
      <TrendingVideosList>
        {videosList.map((video) => (
          <TrendingVideoItem key={video.id} {...video} />
        ))}
      </TrendingVideosList>
    );
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ isDarkTheme, savedVideos }) => (
          <TrendingVideosContainer $isDarkTheme={isDarkTheme}>
            <TrendingTitleContainer $isDarkTheme={isDarkTheme}>
              <TrendingIcon>
                <MdOutlinePlaylistAdd color="#ff0b37" />
              </TrendingIcon>
              <TrendingTitle $isDarkTheme={isDarkTheme}>
                Saved Videos
              </TrendingTitle>
            </TrendingTitleContainer>
            {savedVideos.length === 0 ? (
              <NoSavedVideos />
            ) : (
              this.successView(savedVideos)
            )}
          </TrendingVideosContainer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default SavedVideos;
