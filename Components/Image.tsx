import { getStrapiMedia } from '../lib/media'
import styled from 'styled-components'
import { Media } from '../types/project'

interface ImageProps {
  image: Media
}

const StyledImage = styled.img`
  max-width: 500px;
`

const Image = ({ image }: ImageProps): JSX.Element => {
  const imageUrl = getStrapiMedia(image)

  return (
    <StyledImage src={imageUrl} alt={image.alternativeText || image.name} />
  )
}

export default Image
