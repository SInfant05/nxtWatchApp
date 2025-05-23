import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  justify-content: center;
  //   padding: 24px;

  background: ${({$isDarkTheme}) => ($isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  // max-width: 1200px;
  margin: 0 auto;
  // padding: 16px;
  gap: 16px;
`

export const HomeItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0;
`
