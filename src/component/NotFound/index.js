import ThemeContext from '../Contexts/ThemeContext';
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription
} from './styledComponent';

const NotFound = () => (
  <ThemeContext.Consumer>
    {({ isDarkTheme }) => (
      <NotFoundContainer >
        <NotFoundImage
          src={isDarkTheme
            ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
            : "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          }
          alt="not found"
        />
        <NotFoundHeading $isDarkTheme={isDarkTheme}>Page Not Found</NotFoundHeading>
        <NotFoundDescription $isDarkTheme={isDarkTheme}>
          We are sorry, the page you requested could not be found.
        </NotFoundDescription>
      </NotFoundContainer>
    )}
  </ThemeContext.Consumer>
);
export default NotFound;