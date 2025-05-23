import React from 'react'
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import Home from './component/Home'
import ProtectedRoute from './component/ProtectedRoute'
import Trending from './component/Trending'
import Gaming from './component/Gaming'
import SavedV from './component/SavedV'
import NotFoundH from './component/NotFoundH'
import VideoDetails from './component/VideoDetails'
import ThemeContext from './component/Contexts/ThemeContext'

class App extends React.Component {
  state = {
    isDarkTheme: false,
    selectedMenu: 'HOME',
    savedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  setSelectedMenu = menu => {
    this.setState({selectedMenu: menu})
  }

  addSavedVideo = video => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, video],
    }))
  }

  removeSavedVideo = videoId => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(video => video.id !== videoId),
    }))
  }

  addLikedVideo = videoId => {
    this.setState(prevState => ({
      dislikedVideos: prevState.dislikedVideos.filter(id => id !== videoId),
      likedVideos: [...prevState.likedVideos, videoId],
    }))
  }

  addDislikedVideo = videoId => {
    this.setState(prevState => ({
      likedVideos: prevState.likedVideos.filter(id => id !== videoId),
      dislikedVideos: [...prevState.dislikedVideos, videoId],
    }))
  }

  removeLikedVideo = videoId => {
    this.setState(prevState => ({
      likedVideos: prevState.likedVideos.filter(id => id !== videoId),
    }))
  }

  removeDislikedVideo = videoId => {
    this.setState(prevState => ({
      dislikedVideos: prevState.dislikedVideos.filter(id => id !== videoId),
    }))
  }

  render() {
    const {
      isDarkTheme,
      selectedMenu,
      savedVideos,
      likedVideos,
      dislikedVideos,
    } = this.state

    console.log({
      Home,
      ProtectedRoute,
      Trending,
      Gaming,
      SavedV,
      NotFoundH,
      VideoDetails,
    })

    return (
      <BrowserRouter>
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            selectedMenu,
            toggleTheme: this.toggleTheme,
            setSelectedMenu: this.setSelectedMenu,
            savedVideos,
            addSavedVideo: this.addSavedVideo,
            removeSavedVideo: this.removeSavedVideo,
            likedVideos,
            addLikedVideo: this.addLikedVideo,
            dislikedVideos,
            addDislikedVideo: this.addDislikedVideo,
            removeLikedVideo: this.removeLikedVideo,
            removeDislikedVideo: this.removeDislikedVideo,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute exact path="/saved-videos" component={SavedV} />
            <ProtectedRoute path="/videos/:id" component={VideoDetails} />
            <Route path="/not-found" component={NotFoundH} />
            <Redirect to="/not-found" />
          </Switch>
        </ThemeContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
