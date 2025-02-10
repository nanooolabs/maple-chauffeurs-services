"use client";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import ResourceCard from "@/components/modules/ResourceCard";
import { baseUrl } from "@/lib/constants";
import { stegaClean } from "@sanity/client/stega";
import urlFor from "@/lib/imageUrlBuilder";
import Button from "@/components/modules/Button";
import Pagination from "@/components/modules/Pagination";

const Wrapper = styled.div`
  .b__archive__variant01 {
    &__row {
      --bs-gutter-x: 1.5rem;
      --bs-gutter-y: 2rem;
    }
  }
`;

const ArchiveVariant01 = ({
  data,
  prevPageDestination,
  nextPageDestination,
}) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__archive__variant01 overflow-hidden position-relative"
    >
      <Wrapper>
        <div className="container">
          <div className="row b__archive__variant01__row">
            {data.map((elem) => {
              const {
                featured_image,
                slug,
                title,
                heading,
                excerpt,
                publish_date,
                _id,
              } = elem;

              const destination = `${baseUrl}/blog/${slug.current}`;

              const imageObj = {
                src: featured_image ? urlFor(featured_image).url() : null,
                alt: featured_image ? featured_image.alt : null,
                blurDataURL: featured_image
                  ? featured_image.asset?.metadata?.lqip
                  : null,
              };

              return (
                <div key={_id} className="col-md-6 col-lg-4">
                  <ResourceCard
                    image={imageObj}
                    description={excerpt}
                    heading={stegaClean(heading) ? heading : title}
                    publishDate={publish_date}
                    buttonTitle={`Read more`}
                    buttonDestination={destination}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {prevPageDestination || nextPageDestination ? (
          <div className="container mt-5 pt-4">
            <Pagination
              prevPageDestination={prevPageDestination}
              nextPageDestination={nextPageDestination}
            />
          </div>
        ) : (
          ``
        )}
      </Wrapper>
    </Bounded>
  );
};

export default ArchiveVariant01;
