"use client";
import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import urlFor from "@/lib/imageUrlBuilder";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const Wrapper = styled.div`
  .b__feature__variant01 {
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

const FeatureVariant01 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__feature__variant01 overflow-hidden position-relative"
    >
      <Wrapper className="container position-relative u__z-index-1">
        <div
          className={`row b__feature__variant01__row ${data.align_items_center ? "align-items-center" : ``}`}
        >
          <div
            className={`col-lg-6 ${data.invert_order ? `order-lg-2` : `order-lg-1`}`}
          >
            {data.label && (
              <div>
                <span className="u__subtitle d-block mb-2 u__f-500 u__text-branding-primary u__font-family-heading">
                  {parse(data.label)}
                </span>
              </div>
            )}
            {data.heading && (
              <div className="c__heading-wrapper mb-4">
                <h2 className="c__heading u__h2">{parse(data.heading)}</h2>
              </div>
            )}
            {data.content && (
              <div className="c__richtext-field">
                <PortableText value={data.content} />
              </div>
            )}

            {data.button_title && (
              <div className="c__button-wrapper mt-4 pt-3">
                <Button
                  destination={data?.button_destination}
                  title={data.button_title}
                />
              </div>
            )}
          </div>
          <div
            className={`col-lg-6 ${data.invert_order ? `order-lg-1` : `order-lg-2`}`}
          >
            {data.image && (
              <>
                <div className="b__feature__variant01__image-wrapper">
                  <Image
                    className="b__feature__variant01__image"
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

export default FeatureVariant01;
