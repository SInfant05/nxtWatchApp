import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import ThemeContext from '../Contexts/ThemeContext'
import Loader from '../Loader'
import FailureView from '../FailureView'

import {
  VideoDetailsContainer,
  VideoDetailsContent,
  VideoTitle,
  VideoMeta,
  ChannelInfo,
  LikeButton,
  ChannelDetails,
  ChannelLogo,
  ChannelName,
  SubscriberCount,
  Description,
} from './styledComponent'
import RPlayer from '../RPlayer'

const apiStatueConstants = {
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetailsItem extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatueConstants.inprogress,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatueConstants.inprogress})
    const {id} = this.props
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatueConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatueConstants.failure})
    }
  }

  renderContent = () => {
    const {apiStatus, videoDetails} = this.state

    switch (apiStatus) {
      case apiStatueConstants.inprogress: {
        return <Loader />
      }

      case apiStatueConstants.success: {
        const {
          id,
          thumbnailUrl,
          title,
          videoUrl,
          channel = {},
          viewCount,
          publishedAt,
          description,
        } = videoDetails
        let formattedDate = ''
        if (publishedAt) {
          const publishedAtDate = new Date(publishedAt)
          if (!Number.isNaN(publishedAtDate)) {
            formattedDate = formatDistanceToNow(publishedAtDate, {
              addSuffix: true,
            }).replace(/^(about|over)\s/, '')
          }
        }
        return (
          <ThemeContext.Consumer>
            {({
              isDarkTheme,
              addSavedVideo,
              savedVideos,
              removeSavedVideo,
              likedVideos,
              dislikedVideos,
              addLikedVideo,
              addDislikedVideo,
              removeDislikedVideo,
              removeLikedVideo,
            }) => {
              const isVideoSaved = savedVideos.some(video => video.id === id)
              const isLiked = likedVideos.includes(id)
              const isDisliked = dislikedVideos.includes(id)

              const hadleSaveVideo = () => {
                const videoData = {
                  id,
                  title,
                  channel,
                  videoUrl,
                  thumbnailUrl,
                  viewCount,
                  publishedAt,
                }
                if (!isVideoSaved) {
                  addSavedVideo(videoData)
                } else {
                  removeSavedVideo(id)
                }
              }

              const handleLike = () => {
                if (isLiked) {
                  removeLikedVideo(id)
                } else {
                  addLikedVideo(id)
                }
              }
              const handleDislike = () => {
                if (isDisliked) {
                  removeDislikedVideo(id)
                } else {
                  addDislikedVideo(id)
                }
              }

              return (
                <VideoDetailsContainer
                  $isDarkTheme={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  <RPlayer videoUrl={videoUrl} />
                  <VideoDetailsContent>
                    <VideoTitle $isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                    <VideoMeta $isDarkTheme={isDarkTheme}>
                      <span>
                        {viewCount} views • {formattedDate}
                      </span>
                      <ChannelInfo>
                        <LikeButton
                          onClick={handleLike}
                          $isDarkTheme={isDarkTheme}
                          $isactive={isLiked}
                          type="button"
                        >
                          <BiLike /> Like
                        </LikeButton>
                        <LikeButton
                          onClick={handleDislike}
                          type="button"
                          $isDarkTheme={isDarkTheme}
                          $isactive={isDisliked}
                        >
                          <BiDislike /> Dislike
                        </LikeButton>
                        <LikeButton
                          type="button"
                          onClick={hadleSaveVideo}
                          $isDarkTheme={isDarkTheme}
                          $isactive={isVideoSaved}
                        >
                          <MdOutlinePlaylistAdd />
                          {isVideoSaved ? 'Saved' : 'Save'}
                        </LikeButton>
                      </ChannelInfo>
                    </VideoMeta>
                    <hr />
                    <ChannelDetails>
                      <ChannelLogo
                        src={channel.profileImageUrl}
                        alt="channel logo"
                      />
                      <div>
                        <ChannelName $isDarkTheme={isDarkTheme}>
                          {channel.name}
                        </ChannelName>
                        <SubscriberCount $isDarkTheme={isDarkTheme}>
                          {channel.subscriberCount} subscribers
                        </SubscriberCount>
                        <Description $isDarkTheme={isDarkTheme}>
                          {description}
                        </Description>
                      </div>
                    </ChannelDetails>
                  </VideoDetailsContent>
                </VideoDetailsContainer>
              )
            }}
          </ThemeContext.Consumer>
        )
      }
      case apiStatueConstants.failure: {
        return <FailureView retryFunction={this.getData} />
      }
      default:
        return null
    }
  }

  render() {
    return this.renderContent()
  }
}
export default VideoDetailsItem
