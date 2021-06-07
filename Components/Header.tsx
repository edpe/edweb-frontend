import React from 'react'
import styled from 'styled-components'

import Nav from '../Components/Nav'

interface HeaderProps {
  title: string
  subTitle?: string
}

const Title = styled.h1`
  font-size: 50px;
  padding: 1rem 0;
`

const SubTitle = styled.h2`
  font-family: 'RobotoSlab';
`

export const Header = ({ title, subTitle }: HeaderProps): JSX.Element => {
  return (
    <>
      <Nav />
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </>
  )
}

export default Header
