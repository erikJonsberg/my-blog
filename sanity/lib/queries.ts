import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post" && defined(slug.current) ]{
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

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
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
        _id,
        title,
        "slug": slug.current,
    },
    }`;

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const categoriesQuery = groq`*[_type == "category" && defined(slug.current) ]{
    _id,
    title,
    "slug": slug.current,
    description,
    }`;

export const categoryQuery = groq`*[_type == 'category' && slug.current == $slug][0]{
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
