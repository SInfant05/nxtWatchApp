import { Component } from "react";

import Cookies from "js-cookie";
import {
  HomeVideosContainer,
  SearchInput,
  VideosList,
} from "./styledComponent";
import VideoItem from "../VideoItem";
import Loader from "../Loader";
import FailureView from "../FailureView";
import NoResults from "../NoResults";

const apiStatueConstants = {
  inprogress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class HomeVideos extends Component {
  state = {
    searchInput: "",
    videosList: [],
    apiStatus: apiStatueConstants.inprogress,
  };

  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    this.setState({ apiStatus: apiStatueConstants.inprogress });
    const { searchInput } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
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

  handleSearch = (event) => {
    this.setState({ searchInput: event.target.value }, this.getdata);
  };

  search = (event) => {
    if (event.key === "Enter") {
      this.setState({ searchInput: event.target.value }, this.getdata);
    }
  };

  renderSuccessView = () => {
    const { videosList } = this.state;
    if (videosList.length === 0) {
      return <NoResults />;
    }
    return (
      <VideosList>
        {videosList.map((video) => (
          <VideoItem {...video} key={video.id} />
        ))}
      </VideosList>
    );
  };

  renderVideosList = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatueConstants.success:
        return this.renderSuccessView();
      case apiStatueConstants.failure:
        return <FailureView retry={this.getdata} />;
      case apiStatueConstants.inprogress:
        return <Loader />;
      default:
        return null;
    }
  };

  render() {
    const { searchInput } = this.state;
    return (
      <HomeVideosContainer>
        <SearchInput
          type="search"
          placeholder="Search"
          onChange={this.handleSearch}
          onKeyDown={this.search}
          value={searchInput}
        />
        {this.renderVideosList()}
      </HomeVideosContainer>
    );
  }
}

export default HomeVideos;
