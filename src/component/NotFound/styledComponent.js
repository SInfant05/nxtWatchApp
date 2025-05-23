import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 32px 16px;
  background: 'transparent';
`

export const NotFoundImage = styled.img`
  width: 240px;
  max-width: 100%;
  margin-bottom: 24px;
`

export const NotFoundHeading = styled.h1`
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#fff' : '#1e293b')};
  font-size: 24px;
  margin-bottom: 12px;
  text-align: center;
`

export const NotFoundDescription = styled.p`
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#cbd5e1' : '#475569')};
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
`
