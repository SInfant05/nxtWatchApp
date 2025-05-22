import ThemeContext from "../Contexts/ThemeContext";
import {
  NoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsDescription,
  NoResultsButton
} from './styledComponent';

const NoResults = () => (
  <ThemeContext.Consumer>
    {(context) => {
      const { isDarkTheme } = context;
      return (
        <NoResultsContainer $isDarkTheme={isDarkTheme}>
          <NoResultsImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoResultsHeading $isDarkTheme={isDarkTheme}>No Search results found</NoResultsHeading>
          <NoResultsDescription $isDarkTheme={isDarkTheme}>
            Try different key words or remove search filter
          </NoResultsDescription>
          <NoResultsButton type="button">Retry</NoResultsButton>
        </NoResultsContainer>
      );
    }}
  </ThemeContext.Consumer>
);

export default NoResults;