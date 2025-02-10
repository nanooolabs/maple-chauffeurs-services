import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import { PortableText } from "@portabletext/react";
import Button from "@/components/modules/Button";
import PortableTextComponents from "@/components/modules/PortableTextComponents";

const ContentVariant02 = ({ data }) => {
  return (
    <Bounded
      id={data?._key}
      type={data?._type}
      scopedCss={data?.scoped_css}
      className="b__content__variant02"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pe-lg-4">
            <div className="b__content__variant02__content-wrapper">
              {data.label && (
                <div className="c__heading-label-wrapper mb-3">
                  <span className="u__subtitle d-block mb-2 u__f-500 u__text-branding-primary u__font-family-heading">
                    {parse(data.label)}
                  </span>
                </div>
              )}

              <div className="c__richtext-field u__subtitle">
                {data.heading && (
                  <h2 className="mb-4 u__h1">{parse(data.heading)}</h2>
                )}
                {data.description && (
                  <p className="pe-lg-5">{parse(data.description)}</p>
                )}
              </div>

              {data.button_title && (
                <div className="c__button-wrapper mt-4 pt-3">
                  <Button
                    destination={data?.button_destination}
                    title={data.button_title}
                  />
                </div>
              )}
            </div>
          </div>
          {data.content && (
            <div className="col-lg-6 ps-lg-5 mt-5 mt-lg-0">
              <div className="c__richtext-field u__subtitle">
                <PortableText
                  value={data.content}
                  components={PortableTextComponents}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default ContentVariant02;
