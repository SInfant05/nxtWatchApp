import {
  VideoItemContainer,
  VideoThumbnail,
  VideoDetails,
  ChannelLogo,
  VideoInfo,
  VideoTitle,
  ChannelName,
  VideoMeta,
} from "./styledComponent";
import "./index.css";
import { Link } from "react-router-dom";
import ThemeContext from "../Contexts/ThemeContext";
import { formatDistanceToNow } from "date-fns";
const VideoItem = ({
  id,
  thumbnailUrl,
  channel,
  title,
  viewCount,
  publishedAt,
}) => (
  <ThemeContext.Consumer>
    {({ isDarkTheme }) => {
      let formattedDate = "";
      if (publishedAt) {
        const publishedAtDate = new Date(publishedAt);
        if (!isNaN(publishedAtDate)) {
          formattedDate = formatDistanceToNow(publishedAtDate, {
            addSuffix: true,
          }).replace(/^(about|over)\s/, "");
        }
      }
      return (
        <VideoItemContainer>
          <Link to={`/videos/${id}`} className="nav-link">
            <VideoThumbnail src={thumbnailUrl} alt="Video Thumbnail" />
            <VideoDetails>
              <ChannelLogo src={channel.profileImageUrl} alt="Channel Logo" />
              <VideoInfo>
                <VideoTitle $isdarktheme={isDarkTheme}>{title}</VideoTitle>
                <ChannelName $isdarktheme={isDarkTheme}>
                  {channel.name}
                </ChannelName>
                <VideoMeta $isdarktheme={isDarkTheme}>
                  {viewCount} • {formattedDate}
                </VideoMeta>
              </VideoInfo>
            </VideoDetails>
          </Link>
        </VideoItemContainer>
      );
    }}
  </ThemeContext.Consumer>
);
export default VideoItem;
