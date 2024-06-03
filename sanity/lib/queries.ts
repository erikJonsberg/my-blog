import { groq } from 'next-sanity';

// Posts
export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current) ]{
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->{url, metadata {lqip}},
    body,
    publishedAt,
    author->{
        name,
        "image": image.asset->url,
    },
    categories[]->{
        title,
        "slug": slug.current,
        _id,
    },
    }`;

// Post
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    mainImage {
        alt,
        asset->{
            url,
            metadata {
                lqip
                }
            },
    },
    body[]{
        ...,
        markDefs[]{
            ...,
            _type == "internalLink" => {
                ...,
                "slug": @.reference->slug,
            },
        },
    },
    publishedAt,
    author->{
        name,
        "image": image.asset->url,
    },
    categories[]->{
        _id,
        title,
        "slug": slug.current,
    },
    }`;

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug.current) ]{
    _id,
    title,
    "slug": slug.current,
    "screenshot": screenshot.asset->{url, metadata {lqip}, alt},
    description,
    publishedAt,
    link,
    }`;

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    image {
        alt,
        asset->{
            url,
            metadata {
                lqip
                }
            },
    },
    description,
    publishedAt,
    author->{
        name,
        "image": image.asset->url,
    },
    }`;

// Categories
export const CATS_QUERY = groq`*[_type == "category" && defined(slug.current) ]{
    _id,
    title,
    "slug": slug.current,
    description,
    }`;

// Category Paths
export const categoryPathsQuery = groq`*[_type == "category" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
