import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  background-color: ${({$isDarkTheme}) =>
    $isDarkTheme ? '#0f0f0f' : '#f9f9f9'};
  margin: 0 auto;
  min-width: 900px;
  max-width: 1000px;
`

export const VideoDetailsContent = styled.div`
  margin-top: 24px;
`

export const VideoTitle = styled.h1`
  font-size: 22px;
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin-bottom: 12px;
`

export const VideoMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 15px;
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#e2e8f0' : '#475569')};
`

export const ChannelInfo = styled.div`
  display: flex;
  gap: 16px;
  color: ${({$darkTheme}) => ($darkTheme ? '#f9f9f9' : '#1e293b')};
`

export const LikeButton = styled.button`
  background: none;
  color: ${({$isDarkTheme, $isactive}) => {
    if ($isactive) {
      return '#3b82f6'
    }
    if ($isDarkTheme) {
      return '#f9f9f9'
    }
    return '#1e293b'
  }};

  border: none;
  padding: 6px 18px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.2s;
`

export const ChannelDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-top: 18px;
`

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

export const ChannelName = styled.h2`
  font-size: 18px;
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin: 0 0 4px 0;
`

export const SubscriberCount = styled.p`
  font-size: 14px;
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#94a3b8' : '#64748b')};
  margin: 0 0 8px 0;
`

export const Description = styled.p`
  font-size: 15px;
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#d1d5db' : '#475569')};
  margin: 0;
`
