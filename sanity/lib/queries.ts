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

// Categories
export const CATS_QUERY = groq`*[_type == "category" && defined(slug.current) ]{
    _id,
    title,
    "slug": slug.current,
    description,
    }`;

// Category
export const CAT_QUERY = groq`*[_type == 'category' && slug.current == $slug][0]{
    _id,
  title,
    "slug": slug.current,
  "post": *[_type == "post" && references(^._id)]{
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
  }
}`;

export const categoryPathsQuery = groq`*[_type == "category" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
