import { NextPage } from 'next'
import styled from 'styled-components'

import Layout from '../Components/Layout'
import Header from '../Components/Header'

const Paragraph = styled.p`
  font-family: 'RobotoSlab';
  line-height: 200%;
  width: 800px;
`

const About: NextPage = () => {
  return (
    <Layout>
      <Header title="About" />
      <Paragraph>
        I use technology to create immersive pieces and installations. I have
        performed and exhibited across the UK and Europe at venues including Ars
        Electronica, SARC, Snape Maltings, ICA and the Tate Modern. My work has
        been broadcasted on BBC Radio 3 and 4, Resonance FM and The Discovery
        Channel. I am also one of Sound and Music&apos;s Embedded composers, in
        residence with RPS Award winning Apartment House.
      </Paragraph>
    </Layout>
  )
}

export default About
