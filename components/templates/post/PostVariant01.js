"use client";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import Image from "next/image";
import urlFor from "@/lib/imageUrlBuilder";
import Heading from "@/components/modules/Heading";
import Link from "next/link";
import { formatDate } from "@/lib/helpers";
import { stegaClean } from "@sanity/client/stega";
import ArticleContent from "@/components/modules/ArticleContent";

const Wrapper = styled.article`
  .b__post__variant01 {
    &__image-wrapper {
      width: 100%;
      height: 300px;
      @media (max-width: 500px) {
        width: 125%;
        margin-left: -2rem;
      }
      @media (min-width: 768px) {
        height: 450px;
      }
      @media (min-width: 992px) {
        height: 600px;
      }
      img {
        border-radius: var(--t-global-image-border-radius);
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
      }
    }
  }
`;

const PostVariant01 = ({ data }) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__post__variant01 overflow-hidden position-relative"
    >
      <Wrapper>
        <div className="container">
          <div className="b__post__variant01__header">
            <div className="b__post__variant01__heading-wrapper u__mw-700 mx-auto mb-4 pb-2 text-center">
              {data.primary_category && (
                <div className="mb-2">
                  <Link
                    href={
                      data.primary_category.slug.current
                        ? `/blog/category/${data.primary_category.slug.current}`
                        : `#`
                    }
                    className="u__subtitle u__f-500 u__text-branding-primary u__font-family-heading u__text-decoration-none"
                  >
                    {data.primary_category.title}
                  </Link>
                </div>
              )}
              {data.title || data.heading ? (
                <Heading tag="h1">
                  {stegaClean(data.heading) ? data.heading : data.title}
                </Heading>
              ) : (
                ``
              )}
            </div>
            {data.featured_image && (
              <div className="b__post__variant01__image-wrapper position-relative mb-4 pb-2">
                <Image
                  className="b__hero__variant04__image"
                  fill={true}
                  placeholder="blur"
                  blurDataURL={data.featured_image.asset?.metadata?.lqip}
                  src={urlFor(data.featured_image).url()}
                  alt={data.featured_image.alt ?? ""}
                  sizes="100%"
                />
              </div>
            )}
            <div className="b__post__variant01__body u__mw-800 mx-auto">
              {data.publish_date && (
                <div className="b__post__variant01__date-wrapper mb-4">
                  <span className="u__small u__text-light">
                    <time dateTime={`${data.publish_date}T00:00:00Z`}>
                      Published on {formatDate(data.publish_date)}
                    </time>
                  </span>
                </div>
              )}
              {data.content && (
                <div className="b__post__variant01__article">
                  <ArticleContent content={data.content} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default PostVariant01;
