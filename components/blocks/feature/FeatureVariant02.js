"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import IconCard from "@/components/modules/IconCard";
import urlFor from "@/lib/imageUrlBuilder";
import { stegaClean } from "@sanity/client/stega";

const Wrapper = styled.div`
  .b__feature__variant02 {
    &__row {
      --bs-gutter-y: 1.5rem;
    }
  }
`;

const cardColumns = {
  2: "col-lg-6",
  3: "col-lg-4",
  4: "col-lg-3",
};

const FeatureVariant02 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__feature__variant02 overflow-hidden position-relative"
    >
      <Wrapper>
        <div className="container position-relative u__z-index-1">
          <div className="text-center mx-auto">
            {data.heading && (
              <div className="c__heading-wrapper mb-3">
                <h2 className="u__h2">{parse(data.heading)}</h2>
              </div>
            )}
            {data.description && (
              <div className="c__description-wrapper mx-auto">
                <p className="c__description u__subtitle">
                  {parse(data.description)}
                </p>
              </div>
            )}
          </div>
        </div>
        {data.repeater && (
          <div className="container position-relatie u__z-index-1 mt-4 pt-4 pt-lg-5">
            <div
              className={`row b__feature__variant02__row justify-content-${stegaClean(data.justify_content)}`}
            >
              {data.repeater.map((elem, index) => {
                const {
                  image,
                  heading,
                  description,
                  button_title,
                  button_destination,
                } = elem;

                const imageObj = {
                  src: image ? urlFor(image).url() : null,
                  alt: image ? image.alt : null,
                  blurDataURL: image ? image.asset?.metadata?.lqip : null,
                };
                return (
                  <div
                    key={index}
                    className={`col-md-6 ${data.card_columns ? cardColumns[data.card_columns] : `col-lg-4`}`}
                  >
                    <IconCard
                      style={data?.card_style}
                      headingTag={data.card_heading_tag}
                      icon={imageObj}
                      heading={heading}
                      description={description}
                      buttonTitle={button_title}
                      buttonDestination={button_destination}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Wrapper>
    </Bounded>
  );
};

export default FeatureVariant02;
