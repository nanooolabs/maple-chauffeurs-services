"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import IconListItem from "@/components/modules/IconListItem";
import { PortableText } from "@portabletext/react";
import urlFor from "@/lib/imageUrlBuilder";

const Wrapper = styled.div`
  .b__feature__variant03 {
    &__content-wrapper {
      .c__richtext-field {
        @media (min-width: 992px) {
          padding-right: 7rem;
        }
      }
    }
  }
`;

const FeatureVariant03 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__feature__variant03 overflow-hidden position-relative"
    >
      <Wrapper>
        <div className="container">
          <div
            className={`row ${data.align_items_center ? `align-items-center` : ``}`}
          >
            <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
              <div className="b__feature__variant03__content-wrapper">
                {data.heading && (
                  <div className="c__heading-wrapper mb-3">
                    <h2 className="c__heading u__h2">{parse(data.heading)}</h2>
                  </div>
                )}
                {data.content && (
                  <div className="c__richtext-field">
                    <PortableText value={data.content} />
                  </div>
                )}
              </div>
            </div>
            {data.repeater && (
              <div className="col-lg-6 ps-xl-5">
                <div className="b__feature__variant03__list-wrapper">
                  {data.repeater.map((elem, index) => {
                    const { image, heading, description } = elem;
                    const imageObj = {
                      src: image ? urlFor(image).url() : null,
                      alt: image ? image.alt : null,
                      blurDataURL: image ? image.asset?.metadata?.lqip : null,
                    };
                    return (
                      <IconListItem
                        key={index}
                        className={
                          data.repeater.length - 1 === index
                            ? null
                            : `mb-4 pb-4`
                        }
                        icon={imageObj}
                        heading={heading}
                        description={description}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default FeatureVariant03;
