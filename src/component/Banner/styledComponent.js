import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  // background-position: center;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const BannerLogo = styled.img`
  height: 40px;
  margin-bottom: 16px;
`;

export const BannerHeading = styled.h1`
  font-size: 20px;
  color: #1e293b;
  margin-bottom: 16px;
  font-weight: 500;
`;

export const GetItNow = styled.button`
  background: none;
  border: 1px solid #000;
  color: #000;
  padding: 8px 20px;
  // border-radius: 4px;
  margin-left: 16px;
  cursor: pointer;
  font-weight: 500;
`;