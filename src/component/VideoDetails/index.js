import {Component} from 'react'
import Header from '../Header'
import Menu from '../Menu'
import VideoDetailsItem from '../VideoItemDetails'
import ThemeContext from '../Contexts/ThemeContext'

import {HomeContainer, ContentContainer, HomeItems} from './styledComponent'

class VideoDetails extends Component {
  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <ThemeContext.Consumer>
        {({isDarkTheme}) => (
          <HomeContainer $isDarkTheme={isDarkTheme}>
            <Header />
            <ContentContainer>
              <Menu />
              <HomeItems>
                <VideoDetailsItem id={id} />
              </HomeItems>
            </ContentContainer>
          </HomeContainer>
        )}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoDetails
