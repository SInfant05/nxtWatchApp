import Header from "../Header";
import Menu from "../Menu";
import HomeVideos from "../HomeVideos";
import Banner from "../Banner";
import { HomeContainer, ContentContainer, HomeItems } from "./styledComponent";
import ThemeContext from "../Contexts/ThemeContext";

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const { isDarkTheme } = value;
      console.log("isDarkTheme from home ");
      console.log(isDarkTheme);
      return (
        <HomeContainer $bgcolor={isDarkTheme ? "#212121" : "#f8fafc"}>
          <Header />
          <ContentContainer>
            <Menu />
            <HomeItems >
              <Banner />
              <HomeVideos/>
            </HomeItems >
          </ContentContainer>
        </HomeContainer>
      );
    }}
  </ThemeContext.Consumer>
);

export default Home;
