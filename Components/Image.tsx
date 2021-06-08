import { getStrapiMedia } from '../lib/media'

import { Media } from '../types/project'

interface ImageProps {
  image: Media
}

const Image = ({ image }: ImageProps): JSX.Element => {
  const imageUrl = getStrapiMedia(image)

  return <img src={imageUrl} alt={image.alternativeText || image.name} />
}

export default Image
