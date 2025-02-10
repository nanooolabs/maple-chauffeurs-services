"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";

const Wrapper = styled.div`
  .b__content__variant01 {
    &__grid-row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 1.5rem;
      @media (min-width: 1200px) {
        --bs-gutter-x: 4rem;
      }
      @media (min-width: 1300px) {
        --bs-gutter-x: 5.5rem;
      }
    }
  }
`;

const ContentVariant01 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__content__variant01"
    >
      <Wrapper>
        <div className="container position-relative">
          <div className="row b__content__variant01__grid-row">
            <div className="col-lg-4">
              {data.heading && (
                <div className="c__heading-wrapper mb-lg-4">
                  <h2 className="c__heading u__h2">{parse(data.heading)}</h2>
                </div>
              )}
            </div>
            <div className="col-lg-8">
              {data.content && (
                <div className="c__richtext-field u__h6">
                  <PortableText value={data.content} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default ContentVariant01;
