// import { baseUrl, ogImageDimensions, webConfig } from "~/config";

import { baseUrl, organization } from "./constants";

import urlFor from "@/lib/imageUrlBuilder";

export const ogImageDimensions = {
  width: 1200,
  height: 630,
};

export const getPageBySlugUrl = (slug, directory) =>
  directory
    ? `${baseUrl}/${directory}${slug ? `/${slug}` : ``}`
    : `${baseUrl}/${slug ?? ""}`;

const getOgImage = (options) => {
  const { title, type, id } = options ?? {};

  const params = new URLSearchParams({});
  if (id) params.set("id", id);
  if (title) params.set("title", title);
  if (type) params.set("type", type);

  return "api/og?" + params.toString();
};

export const getMetaData = (data, directory, prev, next) => {
  const {
    _id,
    _type,
    title,
    meta_title,
    slug,
    meta_description,
    featured_image,
    seo_no_index,
  } = data;

  const meta = {
    seoTitle: meta_title ?? `${title || ``} - ${organization}`,
    seoDescription: meta_description ?? "",
  };

  const ogImage = getOgImage({
    title: meta.seoTitle,
    type: _type,
    id: _id,
  });

  const metadata = {
    title: meta.seoTitle,
    description: meta.seoDescription,
    alternates: {
      canonical:
        slug?.current === "index"
          ? `${baseUrl}/`
          : getPageBySlugUrl(slug?.current, directory),
    },
    icons:
      prev || next
        ? {
            other: [
              ...(prev ? [{ rel: "prev", url: `${baseUrl}/${prev}` }] : []),
              ...(next ? [{ rel: "next", url: `${baseUrl}/${next}` }] : []),
            ],
          }
        : null,
    creator: organization,
    // authors: {
    //   name: organization,
    // },
    robots: process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL.includes(
      "vercel.app"
    )
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: seo_no_index ? false : null,
          follow: seo_no_index ? false : null,
          googleBot: {
            index: seo_no_index ? false : null,
            follow: seo_no_index ? false : null,
          },
        },
    openGraph: {
      type: "website",
      countryName: "USA",
      description: meta.seoDescription,
      title: meta.seoTitle,
      images: [
        {
          // url: urlFor(featured_image).url() ?? ogImage,
          url: featured_image ? urlFor(featured_image).url() : ``,
          width: ogImageDimensions.width,
          height: ogImageDimensions.height,
          alt: meta.seoTitle,
          // secureUrl:
          //   urlFor(featured_image).url() ?? getPageBySlugUrl(`/${ogImage}`),
          secureUrl: featured_image ? urlFor(featured_image).url() : ``,
        },
      ],
      url: getPageBySlugUrl(slug?.current),
    },
  };

  return metadata;
};
