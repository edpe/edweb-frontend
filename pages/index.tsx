import { GetStaticProps, NextPage } from 'next'
import Layout from '../Components/Layout'
import Header from '../Components/Header'
import { Project } from '../types/project'

import { fetchAPI } from '../lib/api'

interface HomePageProps {
  projects: Project[]
}

const Home: NextPage<HomePageProps> = ({ projects }) => {
  return (
    <Layout>
      <Header
        title="Ed Perkins"
        subTitle="developer / composer / digital artist"
      />
      {projects.map((project) => {
        return project.title
      })}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Run API calls in parallel
  const [projects] = await Promise.all([
    fetchAPI('/projects'),
    fetchAPI('/categories'),
  ])

  return {
    props: { projects },
    revalidate: 1,
  }
}

export default Home
