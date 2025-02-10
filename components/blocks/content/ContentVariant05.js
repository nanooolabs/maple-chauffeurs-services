"use client";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import Heading from "@/components/modules/Heading";
import IconCard from "@/components/modules/IconCard";
import RichtextField from "@/components/modules/RichtextField";
import Description from "@/components/modules/Description";
import urlFor from "@/lib/imageUrlBuilder";

const Wrapper = styled.div`
  .b__content__variant05 {
    &__grid-row {
      &--main {
        --bs-gutter-y: 2rem;
        @media (min-width: 992px) {
          --bs-gutter-x: 3rem;
          --bs-gutter-y: 0;
        }
        @media (min-width: 1200px) {
          --bs-gutter-x: 6rem;
        }
        .col-lg-8 {
          @media (min-width: 992px) {
            width: 63%;
          }
        }
        .col-lg-4 {
          @media (min-width: 992px) {
            width: 37%;
          }
        }
      }
      &--tile {
        --bs-gutter-x: 2rem;
        --bs-gutter-y: 2rem;
        height: 100%;
      }
    }
  }
`;

const ContentVariant05 = ({ data }) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__content__variant05"
    >
      <Wrapper>
        <div className="container">
          {data.heading && (
            <div className="c__heading-wrapper mb-4">
              <Heading tag={data.heading_tag} className="u__h2">
                {data.heading}
              </Heading>
            </div>
          )}
          {data.description && (
            <div className={`c__description-wrapper`}>
              <Description className="u__subtitle">
                {data.description}
              </Description>
            </div>
          )}
        </div>
        <div className="container mt-3 mt-lg-4 pt-lg-4">
          <div
            className={`row b__content__variant05__grid-row--main ${data.align_items_center ? `align-items-lg-center` : ``}`}
          >
            <div className="col-lg-4">
              {data.content && (
                <div className="b__content__variant05__content-wrapper">
                  <RichtextField content={data.content} />
                </div>
              )}
            </div>
            <div className="col-lg-8">
              {data.repeater && (
                <div className="row b__content__variant05__grid-row--tile">
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
                      <div key={index} className={`col-md-6`}>
                        <IconCard
                          style={data?.card_style}
                          icon={imageObj}
                          heading={heading}
                          headingTag={data.card_heading_tag}
                          description={description}
                          buttonTitle={button_title}
                          buttonDestination={button_destination}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default ContentVariant05;
