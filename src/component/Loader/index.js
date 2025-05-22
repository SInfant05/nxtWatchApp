import { ThreeDots } from "react-loader-spinner";
import { LoaderContainer } from "./styledComponent";
import ThemeContext from "../Contexts/ThemeContext";

const Loader = () => (
  <ThemeContext.Consumer>
    {({ isDarkTheme }) => (
      <LoaderContainer $isDarkTheme={isDarkTheme} data-testid="loader">
        <ThreeDots
          color={isDarkTheme ? "#ffffff" : "#00BFFF"}
          height={80}
          width={80}
        />
      </LoaderContainer>
    )}
  </ThemeContext.Consumer>
);

export default Loader;
