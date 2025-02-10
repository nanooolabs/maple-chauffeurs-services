"use client";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import Heading from "@/components/modules/Heading";
import RichtextField from "@/components/modules/RichtextField";
import Description from "@/components/modules/Description";
import urlFor from "@/lib/imageUrlBuilder";
import TwoColumnTitleWithCTA from "@/components/modules/TwoColumnTitleWithCTA";
import Image from "next/image";

const Wrapper = styled.div`
  .b__content__variant06 {
    &__row {
      display: flex;
      flex-wrap: nowrap;
      gap: 1rem;
      align-items: flex-start;

      @media (max-width: 991px) {
        flex-direction: column;
      }
    }
    &__column--image {
      flex: 0 0 35%;
      max-width: 35%;

      @media (min-width: 1200px) {
        flex: 0 0 32%;
        max-width: 32%;
      }

      img {
        object-fit: cover;
        width: 100%;
        height: auto;
      }
    }
    &__column--content {
      flex: 0 0 65%;
      max-width: 65%;

      @media (min-width: 1200px) {
        flex: 0 0 68%;
        max-width: 68%;
      }
    }
    &__column {
      width: 100%;
      @media (min-width: 992px) {
        padding-left: 12px;
        padding-right: 12px;
      }
      &--image {
        margin-bottom: 1.75rem;
        @media (min-width: 992px) {
          margin-bottom: 0;
          max-width: 35%;
          flex: 0 0 35%;
        }
        @media (min-width: 1200px) {
          max-width: 32%;
          flex: 0 0 32%;
        }
      }
      &--content {
        @media (min-width: 992px) {
          max-width: 65%;
          flex: 0 0 65%;
        }
        @media (min-width: 1200px) {
          max-width: 68%;
          flex: 0 0 68%;
        }
      }
    }
    &__image-wrapper {
      @media (max-width: 991px) {
        width: 95vw; 
      }
      @media (min-width: 992px) {
        padding-right: 1rem;
        height: 100%;
      }
      figure {
        @media (min-width: 992px) and (max-width: 1200px) {
          height: 100%;
        }
      }
      img {
        border-radius: var(--t-global-image-border-radius);
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: 275px;
        @media (min-width: 576px) {
          max-height: 330px;
        }
        @media (min-width: 768px) {
          max-height: 360px;
        }
        @media (min-width: 992px) and (max-width: 1200px) {
          min-height: 100%;
        }
        @media (min-width: 992px) {
          max-height: 420px;
        }
      }
    }
    &__content-wrapper {
      @media (max-width: 991px) {
        width: 95vw;
      }
      @media (min-width: 992px) {
        padding-left: 1rem;
      }
    }
    &__content-grid {
      margin-top: 2rem;
      @media (min-width: 992px) {
        margin-top: 4rem;
      }
      &__row {
        @media (min-width: 768px) {
          display: flex;
          flex-wrap: wrap;
          margin-left: -20px;
          margin-right: -20px;
        }
        @media (min-width: 992px) {
          margin-left: -20px;
          margin-right: -20px;
        }
        @media (min-width: 1200px) {
          margin-left: -33px;
          margin-right: -33px;
        }
      }
      &__column {
        width: 100%;
        margin-bottom: 1.75rem;
        @media (min-width: 768px) {
          max-width: 50%;
          flex: 0 0 50%;
          padding-left: 20px;
          padding-right: 20px;
        }
        @media (min-width: 992px) {
          padding-left: 20px;
          padding-right: 20px;
          max-width: 33.3333336%;
          flex: 0 0 33.3333336%;
        }
        @media (min-width: 1200px) {
          padding-left: 33px;
          padding-right: 33px;
        }
      }
    }
  }
  .c__stacked-icon-with-description {
    &__icon-wrapper {
      img {
        width: 30px;
        height: 30px;
        object-fit: contain;
      }
    }
  }
`;

const ContentVariant06 = ({ data }) => {
  return (
      <Bounded
          id={data?._key}
          type={data?._type}
          scopedCss={data?.scoped_css}
          className="b__content__variant06"
      >
        <Wrapper>
          <div className="container">
            <div className="b__content__variant06__row">
              {data.images && data.images.length > 0 && (
                  <div className="b__content__variant06__column b__content__variant06__column--image">
                    <div className="b__content__variant06__image-wrapper position-relative">
                      {data.images.map((image, index) => {
                        const imageObj = {
                          src: image ? urlFor(image).url() : null,
                          alt: image ? image.alt : null,
                          blurDataURL: image
                              ? image.asset?.metadata?.lqip
                              : null,
                        };
                        return(
                            <figure
                                key={index}
                                className={`m-0 d-inline ${
                                    data.images.length > 1 ? "multi-image" : ""
                                }`}
                            >
                              <Image
                                  src={urlFor(imageObj.src).url()}
                                  alt={imageObj.alt ?? `Image ${index + 1}`}
                                  sizes="100vw"
                                  width={500}
                                  height={300}
                              />
                            </figure>
                        )
                      })}
                    </div>
                  </div>
              )}

              <div className="b__content__variant06__column b__content__variant06__column--content">
                <div className="b__content__variant06__content-wrapper">
                  {data && (
                      <TwoColumnTitleWithCTA
                          heading={data.heading}
                          description={data.description}
                          buttonTitle={data.button_title}
                          buttonDestination={data.button_destination}
                          buttonTheme={data.button_theme}
                      />
                  )}
                  {data.content && (
                      <RichtextField
                          className="u__subtitle mt-4"
                          content={data.content}
                      />
                  )}
                  {data.repeater && (
                      <div className="b__content__variant06__content-grid mt-4">
                        <div className="b__content__variant06__content-grid__row">
                          {data.repeater.map((elem, index) => {
                            const { image, heading, description } = elem;
                            const imageObj = {
                              src: image ? urlFor(image).url() : null,
                              alt: image ? image.alt : null,
                              blurDataURL: image
                                  ? image.asset?.metadata?.lqip
                                  : null,
                            };
                            return (
                                <div
                                    key={index}
                                    className="b__content__variant06__content-grid__column"
                                >
                                  <div className="c__stacked-icon-with-description">
                                    <div className="c__stacked-icon-with-description__icon-wrapper mb-3">
                                      <figure className="m-0">
                                        <Image
                                            placeholder="empty"
                                            src={imageObj.src}
                                            alt={imageObj.alt ?? ""}
                                            width={500}
                                            height={500}
                                        />
                                      </figure>
                                    </div>
                                    {heading && (
                                        <Heading
                                            tag={data.card_heading_tag || `h3`}
                                            className="u__h5 mb-2"
                                        >
                                          {heading}
                                        </Heading>
                                    )}
                                    {description && (
                                        <div className="c__stacked-icon-with-description__description-wrapper">
                                          <Description className="c__stacked-icon-with-description__description mb-0">
                                            {description}
                                          </Description>
                                        </div>
                                    )}
                                  </div>
                                </div>
                            );
                          })}
                        </div>
                      </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Bounded>
  );
};


export default ContentVariant06;
