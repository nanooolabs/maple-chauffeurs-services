"use client";
import styled from "styled-components";
import parse from "html-react-parser";
import { stegaClean } from "@sanity/client/stega";

const Component = styled.div`
  .c__text-card {
    &__bar {
      height: 3px;
      &-wrapper {
        max-width: 125px;
        margin-bottom: 1.5rem;
      }
    }
    &__heading-wrapper {
      margin-bottom: 0.85rem;
    }
  }
  &.c__text-card {
    &--primary {
      .c__text-card {
        &__bar {
          background: var(--t-primary-branding-color);
        }
      }
    }
    &--secondary {
      .c__text-card {
        &__bar {
          background: var(--t-secondary-branding-color);
        }
      }
    }
  }
`;

const TextCardWithBar = ({ heading, description, theme }) => {
  return (
    <Component
      className={`c__text-card ${theme && `c__text-card--${stegaClean(theme)}`}`}
    >
      <div className="c__text-card__wrapper">
        <div className="c__text-card__bar-wrapper">
          <div className="c__text-card__bar" />
        </div>
        {heading && (
          <div className="c__text-card__heading-wrapper">
            <h3 className="c__text-card__heading  u__h5">{parse(heading)}</h3>
          </div>
        )}
        {description && (
          <div className="c__text-card__description-wrapper">
            <p className="c__text-card__description">{parse(description)}</p>
          </div>
        )}
      </div>
    </Component>
  );
};

export default TextCardWithBar;
