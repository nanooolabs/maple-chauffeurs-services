"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import CardWithSpotlightHeading from "@/components/modules/CardWithSpotlightHeading";

const Wrapper = styled.div`
  .b__feature__variant04 {
    &__grid-row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 3rem;
      @media (min-width: 1200px) {
        --bs-gutter-x: 10.3rem;
      }
    }
  }
`;

const cardColumns = {
  2: "col-lg-6",
  3: "col-lg-4",
};

const FeatureVariant04 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__feature__variant04 overflow-hidden position-relative"
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
          <div className="container mt-4 pt-4 pt-lg-5">
            <div className="row b__feature__variant04__grid-row">
              {data.repeater.map((elem, index) => {
                const { heading, description } = elem;
                return (
                  <div
                    key={index}
                    className={`col-md-6 ${data.card_columns ? cardColumns[data.card_columns] : `col-lg-4`}`}
                  >
                    <CardWithSpotlightHeading
                      heading={heading}
                      description={description}
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

export default FeatureVariant04;
