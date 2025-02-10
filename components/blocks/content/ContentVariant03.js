"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import TextCardWithBar from "@/components/modules/TextCardWithBar";

const Wrapper = styled.div`
  .b__content__variant03 {
    &__grid-row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 3rem;
      @media (min-width: 1200px) {
        --bs-gutter-x: 8rem;
      }
    }
  }
`;

const ContentVariant03 = ({ data }) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__content__variant03"
    >
      <Wrapper>
        <div className="container position-relative u__z-index-1">
          <div className="text-center mx-auto">
            {data?.heading && (
              <div className="c__heading-wrapper mb-3">
                <h2 className="u__h2">{parse(data.heading)}</h2>
              </div>
            )}
            {data?.description && (
              <div className="c__description-wrapper mx-auto">
                <p className="c__description u__subtitle">
                  {parse(data.description)}
                </p>
              </div>
            )}
          </div>
        </div>

        {data?.repeater && (
          <div className="container mt-4 pt-4 pt-lg-5">
            <div className="row b__content__variant03__grid-row">
              {data.repeater.map((elem, index) => {
                const { heading, description } = elem;
                return (
                  <div key={index} className={`col-md-6 col-lg-4`}>
                    <TextCardWithBar
                      heading={heading}
                      description={description}
                      theme={data.card_theme && data.card_theme}
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

export default ContentVariant03;
