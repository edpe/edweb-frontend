import { GetStaticProps, NextPage } from 'next'

// import Layout from '../Components/Layout'
// import Header from '../Components/Header'
// import VerticalSpacing from '../Components/VerticalSpacing'
// import ProjectSummary from '../Components/ProjectSummary'
import Placeholder from '../Components/Placeholder'
import { Project } from '../types/project'

import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

interface HomePageProps {
  projects: Project[]
}

const Home: NextPage<HomePageProps> = () => {
  return (
    <Placeholder />
    // <Layout>
    //   <Header title="Ed Perkins" subTitle="developer / composer " />
    //   <VerticalSpacing size={4} />
    //   <ul>
    //     {projects.map((project) => (
    //       <li key={project.id}>
    //         <ProjectSummary project={project} />
    //       </li>
    //     ))}
    //   </ul>
    // </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: 'https://edweb-backend.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query getProjects {
        projects {
          id
          title
          description
          coverImage {
            id
            name
            alternativeText
            url
          }
        }
      }
    `,
  })

  return {
    props: {
      projects: data.projects,
    },
  }
}

export default Home
