"use client";
import Button from "@/components/modules/Button";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import Pill from "@/components/modules/Pill";
import Image from "next/image";
import parse from "html-react-parser";
import urlFor from "@/lib/imageUrlBuilder";
import Heading from "@/components/modules/Heading";

const Wrapper = styled.div`
  .b__hero__variant04 {
    &__row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 3rem;
      @media (min-width: 992px) {
        --bs-gutter-x: 3rem;
        --bs-gutter-y: 0;
      }
      @media (min-width: 1200px) {
        --bs-gutter-x: 5rem;
      }
    }
    &__col {
      &--image {
        position: relative;
        @media (max-width: 992px) {
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
    &__content-wrapper {
      padding: 4rem 0 1rem 0;
      z-index: 2;
      position: relative;
      @media (min-width: 992px) {
        padding: 10rem 0;
        max-width: 590px;
        margin-left: auto;
        margin-right: 0;
      }
    }
    &__image {
      object-fit: cover;
      width: 100%;
      height: 100%;
      @media (max-width: 992px) {
        z-index: 2;
      }
      &-wrapper {
        height: 400px;
        position: relative;
        @media (min-width: 768px) {
          height: 600px;
        }
        @media (min-width: 992px) {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
        }
      }
      &-shape {
        display: none;
        @media (min-width: 1200px) {
          position: absolute;
          top: -10%;
          left: -5rem;
          bottom: -10%;
          width: 130px;
          height: 130%;
          background-color: var(--t-cp-base-white);
          transform: rotate(8deg);
          z-index: 1;
          display: block;
        }
      }
    }
  }
`;

const HeroVariant04 = ({ data }) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__hero__variant04 overflow-hidden position-relative py-0"
    >
      {data?.enable_blobs && (
        <>
          <BlurryBlob
            top="-20rem"
            left="-20rem"
            color="var(--t-blob-color-2)"
            zIndex="2"
          />
          <BlurryBlob bottom="-20rem" left="0rem" zIndex="2" />
        </>
      )}
      <Wrapper>
        <div className="container-fluid">
          <div className="row b__hero__variant04__row">
            <div className="col-lg-6 b__hero__variant04__col--content">
              <div className="b__hero__variant04__content-wrapper">
                {data.label && <Pill title={data.label} />}
                {data.heading && (
                  <div className="c__heading-wrapper">
                    <Heading tag={data.heading_tag} className="u__d2">
                      {data.heading}
                    </Heading>
                  </div>
                )}
                {data.description && (
                  <div className="c__description-wrapper">
                    <p>{parse(data.description)}</p>
                  </div>
                )}
                <div className="c__button-wrapper mt-4 pt-3">
                  <Button
                    destination={data?.button_destination}
                    title={data.button_title}
                    theme={data.button_theme}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 b__hero__variant04__col--image">
              {data.image && (
                <div className="b__hero__variant04__image-wrapper">
                  {data.enable_image_shape && (
                    <div className="b__hero__variant04__image-shape"></div>
                  )}
                  <Image
                    className="b__hero__variant04__image"
                    fill={true}
                    placeholder="blur"
                    blurDataURL={data.image.asset?.metadata?.lqip}
                    src={urlFor(data.image).url()}
                    alt={data.image.alt ?? ""}
                    sizes="100%"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default HeroVariant04;
