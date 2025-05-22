import styled from 'styled-components';

export const VideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  background: 'transparent';
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: 24px;
  overflow: hidden;
  width: 320px;
  list-style: none;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const VideoDetails = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
`;

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const VideoTitle = styled.h3`
  font-size: 18px;
  color:  ${({$isdarktheme}) => ($isdarktheme ? '#f1f5f9' : '#1e293b')};
  margin: 0 0 8px 0;
`;

export const ChannelName = styled.p`
  font-size: 15px;
  color:  ${({$isdarktheme}) => ($isdarktheme ? '#f1f5f9' : '#475569')};;
  margin: 0 0 4px 0;
`;

export const VideoMeta = styled.p`
  font-size: 13px;
  color:  ${({$isdarktheme}) => ($isdarktheme ? '#f1f5f9' : '#64748b')};;
  margin: 0;
`;
