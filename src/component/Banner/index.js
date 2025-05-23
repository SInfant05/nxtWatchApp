import {
  BannerContainer,
  BannerLogo,
  BannerHeading,
  GetItNow,
} from './styledComponent'

const Banner = () => (
  <BannerContainer data-testid="banner">
    <BannerLogo
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="website logo"
    />
    <BannerHeading>Buy Nxt Watch Premium prepaid plans with UPI</BannerHeading>
    <GetItNow type="button">GET IT NOW</GetItNow>
  </BannerContainer>
)

export default Banner
