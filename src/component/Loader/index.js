import Loader from 'react-loader-spinner'
import LoaderContainer from './styledComponent'
import ThemeContext from '../Contexts/ThemeContext'

const LoaderComponent = () => (
  <ThemeContext.Consumer>
    {({isDarkTheme}) => (
      <LoaderContainer $isDarkTheme={isDarkTheme} data-testid="loader">
        <Loader
          type="ThreeDots"
          color={isDarkTheme ? '#ffffff' : '#00BFFF'}
          height={80}
          width={80}
        />
      </LoaderContainer>
    )}
  </ThemeContext.Consumer>
)

export default LoaderComponent
