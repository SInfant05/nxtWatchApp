import { Component } from "react";
import Header from "../Header";
import Menu from "../Menu";
import GamingVideos from "../GamingVideos";
import ThemeContext from "../Contexts/ThemeContext";

import { HomeContainer, ContentContainer, HomeItems } from "./styledComponent";

class Trending extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ isDarkTheme }) => (
          <HomeContainer $isDarkTheme={isDarkTheme}>
            <Header />
            <ContentContainer>
              <Menu />
              <HomeItems>
                <GamingVideos />
              </HomeItems>
            </ContentContainer>
          </HomeContainer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Trending;
