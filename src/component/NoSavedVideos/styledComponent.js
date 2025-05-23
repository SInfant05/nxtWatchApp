import styled from 'styled-components'

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 32px 16px;
  background: 'transparent';
`

export const NoSavedVideosImage = styled.img`
  width: 240px;
  max-width: 100%;
  margin-bottom: 24px;
`

export const NoSavedVideosHeading = styled.h1`
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#fff' : '#1e293b')};
  font-size: 24px;
  margin-bottom: 12px;
  text-align: center;
`

export const NoSavedVideosDescription = styled.p`
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#cbd5e1' : '#475569')};
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
`
