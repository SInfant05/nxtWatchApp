import styled from "styled-components";

export const TrendingVideoItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "#181818" : "#fafafa")};
  border-radius: 8px;
  margin-bottom: 24px;
  overflow: hidden;
  width: 100%;
  max-width: 700px;
`;

export const TrendinglistItem = styled.li`
  list-style: none;
`;

export const TrendingThumbnail = styled.img`
  width: 280px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
`;

export const TrendingVideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export const TrendingVideoTitle = styled.h3`
  font-size: 18px;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#f9f9f9" : "#1e293b")};
  margin: 0 0 8px 0;
`;

export const TrendingChannelName = styled.p`
  font-size: 15px;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#e2e8f0" : "#475569")};
  margin: 0 0 4px 0;
`;

export const TrendingMetaInfo = styled.p`
  font-size: 13px;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#94a3b8" : "#64748b")};
  margin: 0;
`;
