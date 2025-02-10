"use client";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import Heading from "@/components/modules/Heading";
import ArticleContent from "@/components/modules/ArticleContent";
import RichtextField from "@/components/modules/RichtextField";

const Wrapper = styled.div`
  .b__content__variant04 {
    &__content-wrapper {
      max-width: 900px;
    }
  }
`;

const ContentVariant04 = ({ data }) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__content__variant04"
    >
      <Wrapper>
        <div className="container">
          <div className="b__content__variant04__content-wrapper mx-auto">
            {data?.heading && (
              <div className="c__heading-wrapper">
                <Heading tag={data.heading_tag} className="u__h1">
                  {data.heading}
                </Heading>
              </div>
            )}
            {data?.content && data?.content_type && (
              <div
                className={
                  data.content_type === `article` ? `mt-4 pt-3` : `mt-3`
                }
              >
                {data.content_type == "article" && (
                  <ArticleContent content={data.content} />
                )}
                {data.content_type == "richtext" && (
                  <RichtextField content={data.content} />
                )}
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default ContentVariant04;
