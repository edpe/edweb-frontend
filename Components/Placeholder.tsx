import React from 'react'
import styled from 'styled-components'

const Contact = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Name = styled.h1`
  font-family: 'Aqua';
  font-size: 40px;
  text-align: center;
`

const EmailAddress = styled.h3`
  font-family: 'RobotoSlab';
  font-size: 20px;
  text-align: center;
`

const Text = styled.p`
  font-family: 'RobotoSlab';
  margin: 20px;
  text-align: center;
`

export const Placeholder = (): JSX.Element => {
  return (
    <Contact>
      <Name> Ed Perkins</Name>
      <EmailAddress>ed@edperkins.co.uk</EmailAddress>
      <Text>
        I&apos;m sorry that there&apos;s nothing here yet, but hopefully soon
        there will be
      </Text>
      <Text>Meanwhile why not check out</Text>
      <Text>
        <a href="https://inside-looking-out.vercel.app/">
          this data art thing I made
        </a>
      </Text>
    </Contact>
  )
}

export default Placeholder
