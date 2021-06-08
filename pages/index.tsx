import { GetStaticProps, NextPage } from 'next'
import { fetchAPI } from '../lib/api'

import Layout from '../Components/Layout'
import Header from '../Components/Header'
import VerticalSpacing from '../Components/VerticalSpacing'
import ProjectSummary from '../Components/ProjectSummary'
import { Project } from '../types/project'

interface HomePageProps {
  projects: Project[]
}

const Home: NextPage<HomePageProps> = ({ projects }) => {
  return (
    <Layout>
      <Header title="Ed Perkins" subTitle="developer / composer " />
      <VerticalSpacing size={4} />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectSummary project={project} />
          </li>
        ))}
      </ul>
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
