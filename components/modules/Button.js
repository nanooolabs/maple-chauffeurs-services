"use client";
import Link from "next/link";
import React from "react";
import { stegaClean } from "@sanity/client/stega";
import styled from "styled-components";

const Component = styled.div`
  .c {
    &__button {
      padding: var(--t-button-padding);
      border-radius: var(--t-button-border-radius);
      &__content {
        font-weight: var(--t-font-weight-button);
        font-family: var(--t-font-family-button);
      }
      &__loading-icon {
        width: auto;
        display: none;
        padding-left: 0.85em;
        position: relative;
        top: -2px;
        margin: 0;
        .c__spinner {
          height: 20px;
          width: 20px;
        }
      }
      &--loading {
        opacity: 0.7;
        pointer-events: none;
        .c {
          &__button {
            &__content {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            &__arrow-icon {
              svg path {
                stroke: var(--t-cp-base-white);
              }
            }
            &__loading-icon {
              display: block;
            }
          }
        }
      }
      &--disabled {
        opacity: 0.7;
        pointer-events: none;
      }
      &__size {
        &--default {
          font-size: 16px;
        }
        &--large {
          font-size: 18px;
        }
        &--xlarge {
          font-size: 20px;
        }
      }
      &__anchor-element {
        text-decoration: none;
        &:hover,
        &:focus,
        &:active {
          text-decoration: none;
        }
        > span.c__button {
          display: inline-block;
        }
      }
      &--primary {
        background: var(--t-primary-branding-color);
        color: var(--t-cp-base-white);
        &:hover {
          background: var(--t-primary-branding-hover-color);
        }
      }
      &--secondary {
        background: var(--t-secondary-branding-color);
        color: var(--t-cp-base-white);
        &:hover {
          background: var(--t-secondary-branding-hover-color);
        }
      }
      &--ghost {
        &-primary {
          background: transparent;
          border: 2px solid var(--t-primary-branding-color);
          color: var(--t-primary-branding-color);
          &:hover {
            background: var(--t-primary-branding-hover-color);
            color: var(--t-cp-base-white);
          }
        }
        &-secondary {
          background: transparent;
          border: 2px solid var(--t-secondary-branding-color);
          color: var(--t-secondary-branding-color);
          &:hover {
            background: var(--t-secondary-branding-hover-color);
            color: var(--t-cp-base-white);
          }
        }
      }
      &--link {
        background-color: transparent;
        border: none;
        color: var(--t-anchor-color);
        padding: 0;
        .c {
          &__button {
            &__content {
              font-weight: 600 !important;
            }
          }
        }
        &:hover {
          color: var(--t-anchor-hover-color);
          .c {
            &__button__content {
              text-decoration: underline;
              text-underline-offset: 6px;
              text-decoration-thickness: 1px;
            }
          }
          svg {
            path {
              stroke: var(--t-anchor-hover-color);
            }
          }
        }
      }
      &--skip-to-content {
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        clip: rect(0, 0, 0, 0);
        border-width: 0;
        white-space: nowrap;
        &:focus {
          height: auto;
          margin: auto;
          overflow: visible;
          width: auto;
          clip: auto;
          top: 1rem;
          z-index: 9;
        }
      }
      &--inverted {
        background: var(--t-cp-base-white);
        color: var(--t-primary-branding-color);
        &:hover {
          background: #eee;
        }
      }
    }
  }
`;

const Button = ({
  title,
  destination,
  className,
  linkClassName,
  theme = `primary`,
  size = `default`,
  actionable,
  type,
  onClick,
  isLoading,
  isDisabled,
}) => {
  return (
    <>
      {actionable ? (
        <>
          {title && (
            <Component>
              <button
                onClick={onClick}
                type={type}
                className={`c__button c__button--${stegaClean(theme)} ${
                  className ? className : ``
                } c__button__size--${size} ${isLoading ? `c__button--loading` : ``} ${isDisabled ? `c__button--disabled` : ``}`}
              >
                <div className="c__button__content">
                  <span>{title}</span>
                  <figure className="c__button__loading-icon">
                    <svg className="c__spinner" viewBox="0 0 50 50">
                      <circle
                        className="path"
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        strokeWidth="5"
                      ></circle>
                    </svg>
                  </figure>
                </div>
              </button>
            </Component>
          )}
        </>
      ) : (
        <>
          {title && (
            <Component>
              <Link
                className={`c__button__anchor-element ${linkClassName ? linkClassName : ``}`}
                href={destination || "#"}
              >
                <span
                  className={`c__button c__button--${stegaClean(theme)} ${
                    className ? className : ``
                  } c__button__size--${size}`}
                >
                  <div className="c__button__content">
                    <span>{title}</span>
                  </div>
                </span>
              </Link>
            </Component>
          )}
        </>
      )}
    </>
  );
};

export default Button;
