import React from "react";

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  selectedMenu: "",
  setSelectedMenu: () => {},
  savedVideos: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
  likedVideos: [],
  addLikedVideo: () => {},
  removeLikedVideo: () => {},
  dislikedVideos: [],
  addDislikedVideo: () => {},
  removeDislikedVideo: () => {},
});
export default ThemeContext;
