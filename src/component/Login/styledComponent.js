import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({$isDarkTheme}) => ($isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const LoginForm = styled.form`
  background: ${({$isDarkTheme}) => ($isDarkTheme ? '#232323' : '#fff')};
  padding: 32px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  width: 350px;
`

export const Logo = styled.img`
  width: 120px;
  margin: 0 auto 24px auto;
  display: block;
`

export const InputLabel = styled.label`
  font-size: 14px;
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#cbd5e1' : '#475569')};
  margin-bottom: 6px;
`

export const InputField = styled.input`
  padding: 10px 12px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 18px;
  outline: none;
  background: ${({$isDarkTheme}) => ($isDarkTheme ? '#232323' : '#fff')};
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#fff' : '#000')};
  &:focus {
    border-color: #3b82f6;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`

export const Checkbox = styled.input`
  margin-right: 8px;
`

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: ${({$isDarkTheme}) => ($isDarkTheme ? '#cbd5e1' : '#475569')};
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin-bottom: 12px;
`

export const LoginButton = styled.button`
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #2563eb;
  }
`
