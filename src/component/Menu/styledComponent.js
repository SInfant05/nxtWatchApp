import styled from 'styled-components'

export const MenuContainer = styled.div`
  background-color: ${({$isdarktheme}) =>
    $isdarktheme ? '#0f0f0f' : '#f9f9f9'};
  // padding: 24px 16px;
  min-width: 220px;
  // border-radius: 8px;
  height: 90vh;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
`

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const MenuButton = styled.button`
  background: ${({$isactive, $isdarktheme}) => {
    if ($isactive) {
      return $isdarktheme ? '#383838' : '#f1f5f9'
    }
    return 'transparent'
  }};
  border: none;
  color: ${({$isdarktheme}) => ($isdarktheme ? '#fff' : '#000')};
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 0 8px 10px;
  width: 100%;
  text-align: left;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`

export const MenuHeading = styled.h1`
  font-size: 16px;
  color: ${({$isdarktheme}) => ($isdarktheme ? '#fff' : '#334155')};
  margin: 24px 0 12px 0;
  letter-spacing: 1px;
`

export const SocialList = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
`

export const SocialIcon = styled.img`
  height: 28px;
  width: 28px;
`

export const MenuDescription = styled.p`
  color: ${({$isdarktheme}) => ($isdarktheme ? '#fff' : '#475569')};
  font-size: 15px;
  margin-top: 12px;
`
