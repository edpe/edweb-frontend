import styled from 'styled-components'
import Image from '../Components/Image'
import { Project } from '../types/project'

interface ProjectSummaryProps {
  project: Project
}

const ProjectHeading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.title};
  padding-bottom: 1rem;
`
const ProjectDescription = styled.p`
  font-family: 'RobotoSlab';
  font-size: ${(props) => props.theme.fontSizes.normal};
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0;
`

const ProjectInfo = styled.div`
  margin-left: 2rem;
  max-width: 500px;
`

const ProjectSummary = ({ project }: ProjectSummaryProps): JSX.Element => {
  return (
    <ProjectContainer>
      <Image image={project.coverImage} />
      <ProjectInfo>
        <ProjectHeading>{project.title}</ProjectHeading>
        <ProjectDescription>{project.description}</ProjectDescription>
      </ProjectInfo>
    </ProjectContainer>
  )
}

export default ProjectSummary
