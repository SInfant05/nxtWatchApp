import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#212121" : "#f8fafc")};
  padding: 16px 24px;
  // box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  gap: 16px;
`;

export const HeaderLogoContainer = styled.div`
  flex: 1;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Profile = styled.img`
  height: 36px;
  border-radius: 50%;
  margin-left: 16px;
`;

export const LogoutButton = styled.button`
  background: none;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  padding: 8px 20px;
  border-radius: 4pxF;
  margin-left: 16px;
  cursor: pointer;
  font-weight: 500;
`;

export const ThemeToggleButton = styled.button`
  background: ${(props) => (props.isDarkTheme ? "#212121" : "#fff")};
  border: none;
  color: #1e293b;
  cursor: pointer;
  margin-left: 16px;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.2s;
  &:hover {
    background: #e2e8f0;
  }
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
`;

export const PopupHeading = styled.h1`
  font-size: 20px;
  color: #1e293b;
  margin-bottom: 24px;
  text-align: center;
`;

export const PopupButtonsRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const PopupButton = styled.button`
  background: ${(props) => (props.isDarkTheme ? "#fff" : "#3b82f6")};
  color: ${(props) => (props.isDarkTheme ? "#1e293b" : "#fff")};
  border: 1px solid #3b82f6;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
