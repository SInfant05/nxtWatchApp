import { Component } from "react";
import Header from "../Header";
import Menu from "../Menu";
import ThemeContext from "../Contexts/ThemeContext";

import { HomeContainer, ContentContainer, HomeItems } from "./styledComponent";
import NotFound from "../NotFound";


class NotFoundH extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ isDarkTheme }) => (
          <HomeContainer $isDarkTheme={isDarkTheme}>
            <Header />
            <ContentContainer>
              <Menu />
              <HomeItems>
                <NotFound />
              </HomeItems>
            </ContentContainer>
          </HomeContainer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default NotFoundH;
