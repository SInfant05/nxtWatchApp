import { Component } from "react";
import Cookies from "js-cookie";
import Loader from "../Loader";
import GamingVideoItem from "../GamingVideoItem";
import FailureView from "../FailureView";
import { SiYoutubegaming } from "react-icons/si";
import ThemeContext from "../Contexts/ThemeContext";
import {
  TrendingVideosContainer,
  TrendingTitleContainer,
  TrendingIcon,
  TrendingTitle,
  GamingVideosList,
} from "./styledComponent";

const apiStatueConstants = {
  inprogress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class GamingVideos extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatueConstants.inprogress,
  };

  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    this.setState({ apiStatus: apiStatueConstants.inprogress });
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(`https://apis.ccbp.in/videos/gaming`, options);

    if (response.ok) {
      const data = await response.json();
      const updatedData = data.videos.map((video) => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }));
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatueConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatueConstants.failure });
    }
  };

  successView = () => {
    const { videosList } = this.state;
    return (
      <GamingVideosList>
        {videosList.map((video) => (
          <GamingVideoItem key={video.id} {...video} />
        ))}
      </GamingVideosList>
    );
  };

  renderVideos = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatueConstants.success:
        return this.successView();
      case apiStatueConstants.inprogress:
        return <Loader />;
      case apiStatueConstants.failure:
        return <FailureView retry={this.getdata} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ isDarkTheme }) => (
          <TrendingVideosContainer $isDarkTheme={isDarkTheme}>
            <TrendingTitleContainer $isDarkTheme={isDarkTheme}>
              <TrendingIcon>
                <SiYoutubegaming color="#ff0b37" />
              </TrendingIcon>
              <TrendingTitle $isDarkTheme={isDarkTheme}>Gaming</TrendingTitle>
            </TrendingTitleContainer>
            {this.renderVideos()}
          </TrendingVideosContainer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default GamingVideos;
