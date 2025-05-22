import styled from "styled-components";

export const TrendingVideosContainer = styled.div`
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "#181818" : "#fafafa")};
  min-height: 100vh;
  padding: 32px 0;
`;

export const TrendingTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "#383838" : "#f2f2f2")};
  padding: 24px 32px;
  border-radius: 8px;
  margin-bottom: 32px;
`;

export const TrendingIcon = styled.p`
  background: #e1e9f0;
  color: #fff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0;
`;

export const TrendingTitle = styled.h1`
  font-size: 28px;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#f9f9f9" : "#1e293b")};
  margin: 0;
`;

export const TrendingVideosList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
