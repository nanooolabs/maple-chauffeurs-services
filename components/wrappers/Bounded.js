"use client";
import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Section = styled.section`
  ${(props) =>
    props.$scopedCss ||
    `padding: 64px 0; background-color: var(--t-cp-base-white);`}
`;

const Bounded = ({
  type,
  className,
  id,
  scopedCss,
  children,
  ...restProps
}) => {
  return (
    <Section
      id={id ? `bounded-section-id-${id}` : null}
      $scopedCss={scopedCss ? scopedCss?.code : null}
      data-block-type={type && parse(type)}
      className={className}
      {...restProps}
    >
      {children}
    </Section>
  );
};

export default Bounded;
