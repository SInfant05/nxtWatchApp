import {
  TrendingVideoItemContainer,
  TrendingThumbnail,
  TrendingVideoDetails,
  TrendingVideoTitle,
  TrendingChannelName,
  TrendingMetaInfo,
  TrendinglistItem,
} from "./styledComponent";
import { Link } from "react-router-dom";
import ThemeContext from "../Contexts/ThemeContext";
import { formatDistanceToNow } from "date-fns";

const TrendingVideoItem = ({
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
        <TrendinglistItem>
          <Link to={`/videos/${id}`} className="nav-link">
            <TrendingVideoItemContainer $isDarkTheme={isDarkTheme}>
              <TrendingThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoDetails>
                <TrendingVideoTitle $isDarkTheme={isDarkTheme}>
                  {title}
                </TrendingVideoTitle>
                <TrendingChannelName $isDarkTheme={isDarkTheme}>
                  {channel.name}
                </TrendingChannelName>
                <TrendingMetaInfo $isDarkTheme={isDarkTheme}>
                  {viewCount} views • {formattedDate}
                </TrendingMetaInfo>
              </TrendingVideoDetails>
            </TrendingVideoItemContainer>
          </Link>
        </TrendinglistItem>
      );
    }}
  </ThemeContext.Consumer>
);
export default TrendingVideoItem;
