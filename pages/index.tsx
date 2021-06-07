import { NextPage } from 'next'

import Layout from '../Components/Layout'
import Header from '../Components/Header'

const Home: NextPage = () => {
  return (
    <Layout>
      <Header
        title="Ed Perkins"
        subTitle="developer / composer / digital artist"
      />
    </Layout>
  )
}

export default Home
