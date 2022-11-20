import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import type { ReactChild, ReactPortal, ReactNodeArray } from "react";

type ReactNode =
  | ReactChild
  | ReactNodeArray
  | ReadonlyArray<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined;

type WithChildren<T = {}> = T & { children?: ReactNode };

type SEOProps = WithChildren<{
    title?: string,
    description?: string,
    pathname?: string
}>

export const SEO = ({ title, description, pathname, children }: SEOProps) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`
  }

  seo.title = `${seo.title} | Marilyn Wedding Events`
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {children}
    </>
  )
}