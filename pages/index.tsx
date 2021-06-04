import { NextPage } from 'next'
import styled from 'styled-components'

import Layout from '../Components/Layout'

const Title = styled.h1`
  font-size: 50px;
`

const SubHeading = styled.h2`
  font-family: 'RobotoSlab';
`

export const Home: NextPage = () => {
  return (
    <Layout>
      <Title>Ed Perkins</Title>
      <SubHeading>artist / composer / dev</SubHeading>
    </Layout>
  )
}

export default Home
