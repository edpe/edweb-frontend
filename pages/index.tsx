import { GetStaticProps, NextPage } from 'next'
import Layout from '../Components/Layout'
import Header from '../Components/Header'
import { Project } from '../types/project'
import { fetchAPI } from '../lib/api'
import styled from 'styled-components'
import VerticalSpacing from '../Components/VerticalSpacing'
import Image from '../Components/Image'

interface HomePageProps {
  projects: Project[]
}

const ProjectHeading = styled.h2`
  padding: 20px 0;
  font-size: ${(props) => props.theme.fontSizes.title};
`

const Home: NextPage<HomePageProps> = ({ projects }) => {
  return (
    <Layout>
      <Header title="Ed Perkins" subTitle="developer / composer " />
      <VerticalSpacing size={4} />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectHeading>{project.title}</ProjectHeading>
            <Image image={project.coverImage} />
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
