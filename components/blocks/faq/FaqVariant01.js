"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import Accordion from "@/components/modules/Accordion";

const Wrapper = styled.div`
  .b__faq__variant01 {
    &__list-wrapper {
      max-width: 800px;
    }
  }
`;

const FaqVariant01 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__size-md b__faq__variant01 overflow-hidden position-relative"
    >
      <Wrapper>
        <div className="container position-relative u__z-index-1">
          <div className="text-center mx-auto">
            {data.heading && (
              <div className="c__heading-wrapper mb-4">
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
          <div className="container mt-4 pt-4 pt-lg-5">
            <div className="b__faq__variant01__list-wrapper mx-auto">
              {data.repeater.map((elem, index) => {
                return (
                  <Accordion
                    key={index}
                    index={index}
                    heading={elem.heading}
                    content={elem.content}
                    borderBottom={
                      index === data.repeater.length - 1 ? null : true
                    }
                  />
                );
              })}
            </div>
          </div>
        )}
      </Wrapper>
    </Bounded>
  );
};

export default FaqVariant01;
