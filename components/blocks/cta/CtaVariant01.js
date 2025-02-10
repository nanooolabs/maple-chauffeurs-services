"use client";
import styled from "styled-components";
import Bounded from "@/components/wrappers/Bounded";
import Heading from "@/components/modules/Heading";
import Button from "@/components/modules/Button";
import { stegaClean } from "@sanity/client/stega";

const Wrapper = styled.div`
  .b__cta__variant01 {
    &__wrapper {
      border-radius: 16px;
      padding: 2rem;
      @media (min-width: 768px) {
        padding: 4rem;
      }
      &--theme {
        &-primary {
          background-color: var(--t-primary-branding-color);
        }
        &-secondary {
          background-color: var(--t-secondary-branding-color);
        }
      }
    }
  }
`;

const CtaVariant01 = ({ data }) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__cta__variant01"
    >
      <Wrapper>
        <div className="container">
          <div
            className={`mx-auto b__cta__variant01__wrapper b__cta__variant01__wrapper--theme-${stegaClean(data.theme) || `primary`}`}
          >
            <div className="b__cta__variant01__content-wrapper text-center u__text-inverted">
              <div className="c__heading-wrapper mb-3">
                {data.heading && (
                  <Heading tag={data.heading_tag} className="u__h2">
                    {data.heading}
                  </Heading>
                )}
              </div>
              {data.description && (
                <div className={`c__description-wrapper`}>
                  <Heading
                    tag={data.description_tag || "h3"}
                    className="u__h5 u__f-400"
                  >
                    {data.description}
                  </Heading>
                </div>
              )}
              {data.button_title && (
                <div className="c__button-wrapper mt-4 pt-2">
                  <Button
                    destination={data.button_destination}
                    title={data.button_title}
                    theme={data.button_theme || `secondary`}
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

export default CtaVariant01;
