import "./index.css";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import ThemeContext from "../Contexts/ThemeContext";

import {
  MenuContainer,
  MenuList,
  MenuButton,
  MenuHeading,
  SocialList,
  SocialIcon,
  MenuDescription,
  ContactContainer,
} from "./styledComponent";

const Menu = () => (
  <ThemeContext.Consumer>
    {(value) => {
      const { isDarkTheme, selectedMenu, setSelectedMenu } = value;
      const selectedHome = () => {
        setSelectedMenu("HOME");
      };

      const selectedTrending = () => {
        setSelectedMenu("TRENDING");
      };

      const selectedGaming = () => {
        setSelectedMenu("GAMING");
      };
      const selectedSavedVideos = () => {
        setSelectedMenu("SAVED_VIDEOS");
      };

      const menuIconColor = isDarkTheme ? "#ffffff" : "#000000";

      return (
        <MenuContainer $isdarktheme={isDarkTheme}>
          <MenuList>
            <li>
              <Link to="/" className="nav-link">
                <MenuButton
                  onClick={selectedHome}
                  $isactive={selectedMenu === "HOME"}
                  $isdarktheme={isDarkTheme}
                >
                  {
                    <IoMdHome
                      color={
                        selectedMenu === "HOME" ? "#ff031c" : menuIconColor
                      }
                    />
                  }
                  Home
                </MenuButton>
              </Link>
            </li>
            <li>
              <Link to="/trending" className="nav-link">
                <MenuButton
                  
                  onClick={selectedTrending}
                  $isactive={selectedMenu === "TRENDING"}
                  $isdarktheme={isDarkTheme}
                >
                  <HiFire
                    color={
                      selectedMenu === "TRENDING" ? "#ff031c" : menuIconColor
                    }
                  />
                  Trending
                </MenuButton>
              </Link>
            </li>
            <li>
              <Link to="/gaming" className="nav-link">
                <MenuButton
                  
                  onClick={selectedGaming}
                  $isactive={selectedMenu === "GAMING"}
                  $isdarktheme={isDarkTheme}
                >
                  <SiYoutubegaming
                    color={
                      selectedMenu === "GAMING" ? "#ff031c" : menuIconColor
                    }
                  />
                  Gaming
                </MenuButton>
              </Link>
            </li>
            <li>
              <Link to="/saved-videos" className="nav-link">
                <MenuButton
                  
                  onClick={selectedSavedVideos}
                  $isactive={selectedMenu === "SAVED_VIDEOS"}
                  $isdarktheme={isDarkTheme}
                >
                  <MdOutlinePlaylistAdd
                    color={
                      selectedMenu === "SAVED_VIDEOS"
                        ? "#ff031c"
                        : menuIconColor
                    }
                  />
                  Saved videos
                </MenuButton>
              </Link>
            </li>
          </MenuList>
          <ContactContainer>
            <MenuHeading $isdarktheme={isDarkTheme}>CONTACT US</MenuHeading>
            <SocialList>
              <li>
                <SocialIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </li>
              <li>
                <SocialIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </li>
              <li>
                <SocialIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </li>
            </SocialList>
            <MenuDescription $isdarktheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </MenuDescription>
          </ContactContainer>
        </MenuContainer>
      );
    }}
  </ThemeContext.Consumer>
);
export default Menu;
