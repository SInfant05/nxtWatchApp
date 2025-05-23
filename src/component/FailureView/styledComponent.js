import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 32px 16px;
  background-color: 'transparent';
`

export const FailureImage = styled.img`
  width: 240px;
  max-width: 100%;
  margin-bottom: 24px;
`

export const FailureHeading = styled.h1`
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-size: 24px;
  margin-bottom: 12px;
  text-align: center;
`

export const FailureDescription = styled.p`
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#e2e8f0' : '#475569')};
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
`

export const RetryButton = styled.button`
  background: #3b82f6;
  color: #fff;
  border: none;
  padding: 10px 28px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`
