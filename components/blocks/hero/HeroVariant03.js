import Button from "@/components/modules/Button";
import Bounded from "@/components/wrappers/Bounded";
import { stegaClean } from "@sanity/client/stega";
import Heading from "@/components/modules/Heading";
import Image from "next/image";
import urlFor from "@/lib/imageUrlBuilder";
import BackgroundTint from "@/components/modules/BackgroundTint";

const HeroVariant03 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className={`b__hero__variant03 overflow-hidden position-relative ${data.background_theme && `u__background-${stegaClean(data.background_theme)}`}`}
    >
      {data.image && (
        <div className="c__absolute-image">
          <Image
            fill={true}
            placeholder="blur"
            blurDataURL={data.image.asset?.metadata?.lqip}
            src={urlFor(data.image).url()}
            alt={data.image.alt ?? ""}
            sizes="100%"
          />
        </div>
      )}
      {data.enable_background_tint && <BackgroundTint />}
      <div
        className={`container position-relative u__z-index-1 ${data.background_theme && `u__text-inverted`}`}
      >
        <div className={`${data.align_left ? `text-start` : `text-center`}`}>
          {data.heading && (
            <div
              className={`c__heading-wrapper ${data.description ? `mb-4` : `mb-0`}`}
            >
              <Heading
                tag={data.heading_tag}
                className={`u__${data.heading_size ? data.heading_size : `d2`} ${!data.description && `mb-0`}`}
              >
                {data.heading}
              </Heading>
            </div>
          )}
          {data.description && (
            <div
              className={`c__subtitle-wrapper ${data.button_title ? `mb-4` : ``}`}
            >
              <Heading
                tag={data?.description_tag}
                className={`u__${data.description_size ? data.description_size : `h6`}  ${data.button_title ? `mb-2` : `mb-0`}`}
              >
                {data.description}
              </Heading>
            </div>
          )}
          {data.button_title && (
            <div className="c__button-wrapper mt-4 pt-3">
              <Button
                destination={data?.button_destination}
                title={data.button_title}
                theme={data.button_theme}
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default HeroVariant03;
