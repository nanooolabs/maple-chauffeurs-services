"use client";
import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import Pill from "@/components/modules/Pill";
import Image from "next/image";
import urlFor from "@/lib/imageUrlBuilder";

const Wrapper = styled.div`
  .b__hero__variant02 {
    &__row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 2rem;
      @media (min-width: 992px) {
        --bs-gutter-x: 3rem;
        --bs-gutter-y: 0;
      }
      @media (min-width: 1200px) {
        --bs-gutter-x: 5rem;
      }
    }
    &__image {
      border-radius: var(--t-global-image-border-radius);
      object-fit: cover;
      width: 100%;
      height: 100%;
      &-wrapper {
        height: 350px;
        position: relative;
        @media (min-width: 768px) {
          height: 500px;
        }
        @media (min-width: 992px) {
          width: 100%;
          height: 100%;
          min-height: 450px;
        }
      }
    }
  }
`;

const HeroVariant02 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__hero__variant02 overflow-hidden position-relative"
    >
      {data.enable_blobs && (
        <>
          <BlurryBlob top="-20rem" left="-20rem" />
          <BlurryBlob
            bottom="-20rem"
            right="0rem"
            color="var(--t-blob-color-2)"
          />
        </>
      )}
      <Wrapper className="container position-relative u__z-index-1">
        <div
          className={`row b__hero__variant02__row ${data.align_items_center ? "align-items-center" : ``}`}
        >
          <div className="col-lg-6">
            {data.label && <Pill title={data.label} />}
            {data.heading && (
              <div className="c__heading-wrapper mb-4">
                <h1 className="c__heading u__d2">{parse(data.heading)}</h1>
              </div>
            )}
            {data.content && (
              <div className="c__description-wrapper">
                <p className="c__description u__h6">{parse(data.content)}</p>
              </div>
            )}
            {data.button_title && (
              <div className="c__button-wrapper mt-4 pt-3">
                <Button
                  destination={data.button_destination}
                  title={data.button_title}
                />
              </div>
            )}
          </div>
          <div className="col-lg-6">
            {data.image && (
              <>
                <div className="b__hero__variant02__image-wrapper">
                  <Image
                    className="b__hero__variant02__image"
                    fill={true}
                    placeholder="blur"
                    blurDataURL={data.image.asset.metadata.lqip}
                    src={urlFor(data.image).url()}
                    alt={data.image.alt ?? ""}
                    sizes="100%"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default HeroVariant02;
