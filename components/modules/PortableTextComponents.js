import parse from "html-react-parser";
import { stegaClean } from "@sanity/client/stega";
import Image from "next/image";
import urlFor from "@/lib/imageUrlBuilder";
import { fallbackImageBlurDataUrl } from "@/lib/constants";

const PortableTextComponents = {
  types: {
    code: ({ value }) => {
      return <>{value && value.code && parse(stegaClean(value.code))}</>;
    },
    image: ({ value }) => {
      return (
        <>
          {value && value.asset && (
            <>
              <div className="c__richtext-field__image-wrapper">
                <Image
                  className="c__richtext-field__image"
                  placeholder="blur"
                  blurDataURL={
                    value.asset.metadata?.lqip ?? fallbackImageBlurDataUrl
                  }
                  src={urlFor(value.asset).url()}
                  alt={value.alt ?? ""}
                  sizes="100vw"
                  width={500}
                  height={400}
                  data-has-blur-data-url={
                    value.asset.metadata ? `true` : `false`
                  }
                />
              </div>
            </>
          )}
        </>
      );
    },
  },
};

export default PortableTextComponents;
