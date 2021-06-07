export interface Project {
    id: number,
    title: string,
    description: string,
    date: string,
    slug: string,
    created_at: string,
    updated_at: string,
    content: Content | Content[],
    coverImage: Media,
    categories: Category | Category[]
}

interface Content {
    contentItem: RichTextContent | MediaContent
}

interface RichTextContent {
    __component: string,
    id: number,
    content: string
}

interface MediaContent {
    __component: string,
    id: number,
    description?: string,
    media: Media
}

interface Media {
    id: number,
    name: string,
    alternativeText?: string,
    caption?: string,
    width: number,
    height: number,
    formats: Formats,
    hash: string,
    ext: string,
    mime: string,
    size: number, 
    url: string,
    previewUrl?: string,
    provider: string,
    provider_metadata: string,
    created_at: string,
    updated_at: string
}

interface Formats {
    thumbnail: Image,
    large: Image,
    medium: Image,
    small: Image
}

interface Image {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    width: number,
    height: number,
    size: number,
    path?: string,
    url: string
}

export interface Category {
    id: string,
    title: string,
    description: string,
    created_at: string,
    updated_at: string
}