import styled from 'styled-components'
import { Media } from '../types/project'

interface ImageProps {
  image: Media
}

const StyledImage = styled.img`
  max-width: 500px;
  height: auto;
`

const Image = ({ image }: ImageProps): JSX.Element => {
  return (
    <StyledImage
      src={'http://localhost:1337' + image.url}
      alt={image.alternativeText || image.name}
    />
  )
}

export default Image
