import styled from "styled-components";

export const GamingVideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: "transparent";
  overflow: hidden;
  width: 240px;
`;

export const GaminglistItem = styled.li`
  list-style: none;
`;

export const GamingThumbnailContainer = styled.div`
  width: 100%;

  overflow: hidden;
`;

export const GamingThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GamingDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const GamingTitle = styled.h3`
  font-size: 16px;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#f9f9f9" : "#1e293b")};
  margin: 0 0 8px 0;
`;

export const GamingMetaInfo = styled.p`
  font-size: 14px;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#e2e8f0" : "#64748b")};
  margin: 0;
`;
