"use client";
import styled from "styled-components";
import Button from "./Button";
import Image from "next/image";
import Heading from "./Heading";
import Description from "./Description";
import { stegaClean } from "@sanity/client/stega";

const Component = styled.div`
  padding: 2rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--t-global-card-border-radius);
  .c__icon-card {
    &__wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    &__icon-wrapper {
      margin-bottom: 2.5rem;
      img,
      svg {
        width: 42px;
        height: 42px;
      }
      img {
        object-fit: contain;
      }
    }
  }
  &.c__icon-card {
    &--solid {
      background-color: var(--t-light-background-color);
    }
    &--outlined {
      border: 2px solid var(--t-border-color);
    }
    &--shadow {
      box-shadow: var(--t-box-shadow-lg);
      border: 1px solid var(--t-border-color);
    }
  }
`;

const IconCard = ({
  style = "shadow",
  icon,
  heading,
  headingTag,
  description,
  buttonTitle,
  buttonDestination,
  buttonTheme = "link",
}) => {
  return (
    <Component className={`c__icon-card c__icon-card--${stegaClean(style)}`}>
      <div className="c__icon-card__wrapper">
        {icon && icon.src && (
          <div className="c__icon-card__icon-wrapper">
            <figure className="m-0">
              <Image
                placeholder="blur"
                blurDataURL={icon.blurDataURL}
                src={icon.src}
                alt={icon.alt ?? ""}
                width={500}
                height={500}
              />
            </figure>
          </div>
        )}
        {heading && (
          <div className="c__icon-card__heading-wrapper">
            <Heading
              tag={headingTag || `h3`}
              className="c__icon-card__heading u__h5"
            >
              {heading}
            </Heading>
          </div>
        )}
        {description && (
          <div
            className={`c__icon-card__description-wrapper ${buttonTitle ? `mt-2 mb-3` : ``}`}
          >
            <Description className="c__icon-card__description mb-0">
              {description}
            </Description>
          </div>
        )}
        {stegaClean(buttonTitle) && (
          <div className="c__icon-card__button-wrapper mt-auto pt-4">
            <Button
              destination={buttonDestination}
              title={buttonTitle}
              theme={buttonTheme}
            />
          </div>
        )}
      </div>
    </Component>
  );
};

export default IconCard;
