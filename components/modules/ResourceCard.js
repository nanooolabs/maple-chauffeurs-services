"use client";
import styled from "styled-components";
import parse from "html-react-parser";
import Image from "next/image";
import Heading from "./Heading";
import Button from "./Button";
import Link from "next/link";
import { formatDate } from "@/lib/helpers";

const Component = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  .c__resource-card {
    &__image {
      width: 100%;
      object-fit: cover;
      border-radius: var(--t-global-image-border-radius);
      height: auto;
      max-height: 350px;
      @media (min-width: 992px) {
        height: 200px;
      }
      @media (min-width: 1200px) {
        height: 250px;
      }
    }
  }
`;

const ResourceCard = ({
  image = {
    src: `https://cdn.sanity.io/images/nqj5p7gd/production/1f41c4bad180126545d88582d90cd3b3f1cc43ed-605x451.jpg`,
    alt: `Placeholder grayscale mountains`,
    blurDataURL: `https://cdn.sanity.io/images/nqj5p7gd/production/1f41c4bad180126545d88582d90cd3b3f1cc43ed-605x451.jpg`,
  },
  publishDate,
  heading,
  description,
  buttonTitle = "Read more",
  buttonDestination,
}) => {
  return (
    <Component className="c__resource-card position-relative">
      <div className="c__resource-card__top mb-3">
        {image && (
          <div className="c__resource-card__image-wrapper">
            <Image
              className="c__resource-card__image"
              sizes="100vw"
              width={500}
              height={300}
              placeholder={`blur`}
              blurDataURL={image.blurDataURL}
              src={image.src}
              alt={image.alt ?? ""}
            />
          </div>
        )}
      </div>
      <div className="c__resource-card__bottom">
        {publishDate && (
          <div className="c__resource-card__date-wrapper mb-2">
            <span className="u__small u__text-light">
              <time dateTime={`${publishDate}T00:00:00Z`}>
                {formatDate(publishDate)}
              </time>
            </span>
          </div>
        )}
        {heading && (
          <div className="c__resource-card__heading-wrapper">
            <Heading tag="h2" className="u__h5" disableParse>
              <Link
                href={buttonDestination || "#"}
                className="u__full-cover-anchor-psuedo u__inherited-anchor u__text-decoration-underline-hover"
              >
                {heading}
              </Link>
            </Heading>
          </div>
        )}
        {description && (
          <div className="c__resource-card__description-wrapper">
            <p className="u__small">{parse(description)}</p>
          </div>
        )}
      </div>
      {buttonTitle && (
        <div className="mt-auto">
          <Button
            theme="link"
            title={buttonTitle}
            destination={buttonDestination}
          />
        </div>
      )}
    </Component>
  );
};

export default ResourceCard;
