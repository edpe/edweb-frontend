import { getStrapiURL } from './api'
import { Media } from '../types/project'


export function getStrapiMedia(media: Media): string {
  const imageUrl = media.url.startsWith('/')
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}
