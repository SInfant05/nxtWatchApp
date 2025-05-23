import {Component} from 'react'
import Header from '../Header'
import Menu from '../Menu'
import SavedVideos from '../SavedVideos'
import ThemeContext from '../Contexts/ThemeContext'

import {HomeContainer, ContentContainer, HomeItems} from './styledComponent'

class SavedV extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({isDarkTheme}) => (
          <HomeContainer $isDarkTheme={isDarkTheme} data-testid="savedVideos">
            <Header />
            <ContentContainer>
              <Menu />
              <HomeItems>
                <SavedVideos />
              </HomeItems>
            </ContentContainer>
          </HomeContainer>
        )}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedV
