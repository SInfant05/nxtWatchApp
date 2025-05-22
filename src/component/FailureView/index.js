import ThemeContext from "../Contexts/ThemeContext";
import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from "./styledComponent";

const FailureView = ({ retry }) => (
  <ThemeContext.Consumer>
    {({ isDarkTheme }) => (
      <FailureViewContainer $isDarkTheme={isDarkTheme}>
        <FailureImage
          src={
            isDarkTheme
              ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          }
          alt="failure view"
        />
        <FailureHeading $isDarkTheme={isDarkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureDescription $isDarkTheme={isDarkTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailureDescription>
        <RetryButton type="button" onClick={retry}>
          Retry
        </RetryButton>
      </FailureViewContainer>
    )}
  </ThemeContext.Consumer>
);

export default FailureView;
