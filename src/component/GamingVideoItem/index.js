import {Link} from 'react-router-dom'
import {
  GamingVideoItemContainer,
  GamingThumbnailContainer,
  GamingThumbnail,
  GamingDetails,
  GamingTitle,
  GamingMetaInfo,
  GaminglistItem,
} from './styledComponent'

import './index.css'
import ThemeContext from '../Contexts/ThemeContext'

const GamingVideoItem = ({id, title, thumbnailUrl, viewCount}) => (
  <ThemeContext.Consumer>
    {({isDarkTheme}) => (
      <GaminglistItem>
        <Link to={`/videos/${id}`} className="nav-link">
          <GamingVideoItemContainer $isDarkTheme={isDarkTheme}>
            <GamingThumbnailContainer>
              <GamingThumbnail
                src={thumbnailUrl}
                alt="Gaming Video Thumbnail"
              />
            </GamingThumbnailContainer>
            <GamingDetails>
              <GamingTitle $isDarkTheme={isDarkTheme}>{title}</GamingTitle>
              <GamingMetaInfo $isDarkTheme={isDarkTheme}>
                {viewCount} Watching Worldwide
              </GamingMetaInfo>
            </GamingDetails>
          </GamingVideoItemContainer>
        </Link>
      </GaminglistItem>
    )}
  </ThemeContext.Consumer>
)

export default GamingVideoItem
