import React from "react";
import parse from "html-react-parser";
import { stegaClean } from "@sanity/client/stega";

const Description = ({ children, className = "u__p", disableParse }) => {
  return (
    <>
      <p className={`c__description ${className}`}>
        {disableParse
          ? children
          : children.includes("<span")
            ? parse(stegaClean(children))
            : parse(children)}
      </p>
    </>
  );
};

export default Description;
