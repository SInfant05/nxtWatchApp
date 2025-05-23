import {Component} from 'react'
import Header from '../Header'
import Menu from '../Menu'
import TrendingVideos from '../TrendingVideos'
import ThemeContext from '../Contexts/ThemeContext'

import {HomeContainer, ContentContainer, HomeItems} from './styledComponent'

class Trending extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({isDarkTheme}) => (
          <HomeContainer $isDarkTheme={isDarkTheme} data-testid="trending">
            <Header />
            <ContentContainer>
              <Menu />
              <HomeItems>
                <TrendingVideos />
              </HomeItems>
            </ContentContainer>
          </HomeContainer>
        )}
      </ThemeContext.Consumer>
    )
  }
}
export default Trending
