import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import BlurryBlob from "@/components/modules/BlurryBlob";
import Heading from "@/components/modules/Heading";

const HeroVariant01 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__hero__variant01 overflow-hidden position-relative"
    >
      {data.enable_blobs && (
        <>
          <BlurryBlob top="-10rem" left="-10rem" />
          <BlurryBlob
            bottom="-10rem"
            right="-10rem"
            color="var(--t-blob-color-2)"
          />
        </>
      )}
      <div className="container position-relative u__z-index-1">
        <div className={`${data.align_left ? `text-start` : `text-center`}`}>
          {data.heading && (
            <div className="c__heading-wrapper mb-4">
              <Heading tag={data?.heading_tag || "h1"} className={`u__d1`}>
                {data.heading}
              </Heading>
            </div>
          )}
          {data.description && (
            <div className="c__subtitle-wrapper mb-4">
              <Heading
                tag={data?.description_heading_tag || "h2"}
                className={`u__h5`}
              >
                {data.description}
              </Heading>
            </div>
          )}
          {data.content && (
            <div
              className={`c__description-wrapper ${data.align_left ? `` : `mx-auto`}`}
              style={data.align_left ? null : { maxWidth: 900 }}
            >
              <p className="c__description u__subtitle">
                {parse(data.content)}
              </p>
            </div>
          )}
          {data.button_title && (
            <div className="c__button-wrapper mt-4 pt-3">
              <Button
                destination={data.button_destination}
                title={data.button_title}
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default HeroVariant01;
