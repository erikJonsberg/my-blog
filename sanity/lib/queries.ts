import { groq } from 'next-sanity';

// Posts
export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current) ]{
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->{url, metadata {lqip}},
    "alt": mainImage.alt,
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
    "mainImage": mainImage.asset->{url, metadata {lqip}},
    "alt": mainImage.alt,
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
    "screenshot": screenshot.asset->{url, metadata {lqip}},
    "alt": screenshot.alt,
    description,
    publishedAt,
    link,
    }`;

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "sceenshot": screenshot.asset->{url, metadata {lqip}},
    "alt": screenshot.alt,
    description,
    publishedAt,
    author->{
        name,
        "image": image.asset->url,
    },
    }`;

export const CATS_QUERY = groq`*[_type == "category" && defined(slug.current) ]{
    _id,
    title,
    "slug": slug.current,
    description,
    }`;

// Categories
export const CAT_QUERY = groq`*[_type == "category" && slug.current == $slug][0]{
    "slug": slug.current,
  title,
  "post": *[_type == "post" && references(^._id)]{
    _id,
    "slug": slug.current,
    title,
    "mainImage": mainImage.asset->{url, metadata {lqip}},
    "alt": mainImage.alt,
    publishedAt,
},
}`;

// Category Paths
export const categoryPathsQuery = groq`*[_type == "category" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
