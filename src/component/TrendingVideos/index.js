import { Component } from "react";
import Cookies from "js-cookie";
import Loader from "../Loader";
import TrendingVideoItem from "../TrendingVideoItem";
import FailureView from "../FailureView";
import { HiFire } from "react-icons/hi";
import {
  TrendingVideosContainer,
  TrendingTitleContainer,
  TrendingIcon,
  TrendingTitle,
  TrendingVideosList
} from "./styledComponent";

const apiStatueConstants = {
  inprogress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class TrendingVideos extends Component {
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
    const response = await fetch(
      `https://apis.ccbp.in/videos/trending`,
      options
    );

    if (response.ok) {
      const data = await response.json();
      const updatedData = data.videos.map((video) => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
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
      <TrendingVideosList>
        {videosList.map((video) => (
          <TrendingVideoItem
            key={video.id}
            {...video}
          />
        ))}
      </TrendingVideosList>
    );
  }

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
  }

  render() {
    return (
      <TrendingVideosContainer>
        <TrendingTitleContainer>
          <TrendingIcon>
            <HiFire color="#ff0b37" />
          </TrendingIcon>
          <TrendingTitle>Trending</TrendingTitle>
        </TrendingTitleContainer>
        {this.renderVideos()}
      </TrendingVideosContainer>
    );
  }
}
export default TrendingVideos;
