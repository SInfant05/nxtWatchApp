import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 400px;
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "#181818" : "#f8fafc")};
  padding: 32px 0;
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "#000" : "#000")};
  border-radius: 8px;
  overflow: hidden;
`;
