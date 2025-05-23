import {withRouter, Link} from 'react-router-dom'
import {MdNightlightRound, MdOutlineLightMode} from 'react-icons/md'
import {Popup} from 'reactjs-popup'
import Cookies from 'js-cookie'
import {
  HeaderContainer,
  Logo,
  Profile,
  LogoutButton,
  HeaderLogoContainer,
  PopupContainer,
  PopupHeading,
  PopupButtonsRow,
  PopupButton,
  ThemeToggleButton,
} from './styledComponent'
import ThemeContext from '../Contexts/ThemeContext'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const handleTheme = () => {
        toggleTheme()
      }
      const handleLogout = close => {
        const {history} = props
        Cookies.remove('jwt_token')

        history.replace('/login')
        close()
      }
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <HeaderContainer $isDarkTheme={isDarkTheme}>
          <HeaderLogoContainer>
            <Link to="/">
              <Logo src={logoUrl} alt="website logo" />
            </Link>
          </HeaderLogoContainer>
          <ThemeToggleButton
            type="button"
            onClick={handleTheme}
            data-testid="theme"
          >
            {isDarkTheme ? (
              <MdOutlineLightMode size={28} />
            ) : (
              <MdNightlightRound size={28} />
            )}
          </ThemeToggleButton>
          <Profile
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <Popup modal trigger={<LogoutButton>Logout</LogoutButton>}>
            {close => (
              <PopupContainer>
                <PopupHeading>Are you sure you want to logout?</PopupHeading>
                <PopupButtonsRow>
                  <PopupButton type="button" onClick={close} cancel>
                    Cancel
                  </PopupButton>
                  <PopupButton
                    type="button"
                    onClick={() => handleLogout(close)}
                  >
                    Confirm
                  </PopupButton>
                </PopupButtonsRow>
              </PopupContainer>
            )}
          </Popup>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
