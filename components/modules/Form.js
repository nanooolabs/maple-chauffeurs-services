"use client";
import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import Button from "./Button";
import { stegaClean } from "@sanity/client/stega";
import { checkValidJSONString, checkValidJS } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import { baseUrl } from "@/lib/constants";

const Component = styled.div`
  .c {
    &__form {
      &__fields-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin-left: -6px;
        margin-right: -6px;
      }
      &__fieldset {
        width: 100%;
        margin-bottom: 1rem;
        padding-left: 6px;
        padding-right: 6px;
        &--50 {
          @media (min-width: 500px) {
            max-width: 50%;
            flex: 0 0 50%;
          }
        }
        &--hidden {
          display: none;
        }
      }
      &__error {
        color: var(--t-cp-error-400);
        margin-top: 0.25rem;
        font-size: 0.8rem;
      }
      &__input {
        &--error {
          border-color: var(--t-cp-error-400) !important;
          &:focus {
            border: 1px solid var(--t-cp-error-400) !important;
            box-shadow:
              0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px var(--t-cp-error-50) !important;
          }
        }
      }
      &__message {
        margin-top: 1.5rem;
        text-align: center;
        padding: 0.75rem;
        border-radius: 8px;
        > :last-child {
          margin-bottom: 0;
        }
        &--success {
          background-color: var(--t-cp-success-100);
          border: 1px solid var(--t-cp-success-400);
        }
        &--error {
          background-color: var(--t-cp-error-50);
          border: 1px solid var(--t-cp-error-400);
        }
      }
    }
  }
  form {
    label {
      color: var(--t-form-label-color);
      margin-bottom: 0.35rem;
      display: block;
      font-size: 0.85rem;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="tel"],
    input[type="number"],
    input[type="file"],
    select,
    textarea {
      color: var(--t-body-color);
      border: 1px solid var(--t-form-input-border-color);
      outline: none;
      border-radius: var(--t-form-input-border-radius);
      transition: 0.2s ease;
      box-shadow: var(--t-form-input-box-shadow);
      padding: 0.65rem 0.75rem;
      width: 100%;
      font-size: 0.95rem;
      background-color: var(--t-cp-base-white);
      &:focus,
      &:focus-within,
      &:focus-visible {
        border-color: var(--t-form-input-focus-border-color);
        box-shadow: var(--t-form-input-focus-box-shadow);
        outline: none;
        transition: 0.2s ease;
      }
    }
    ::-webkit-input-placeholder,
    ::-moz-placeholder,
    :-ms-input-placeholder,
    :-moz-placeholder,
    ::placeholder {
      color: var(--t-form-placeholder-color);
    }
    select {
      -webkit-appearance: none;
      appearance: none;
      -moz-appearance: none;
      background-image: url(https://www.taylor.com/hubfs/ICONS/chev-down.svg);
      background-repeat: no-repeat;
      background-size: 13px;
      background-position: 97% 50%;
      background-color: transparent;
      @media (min-width: 768px) {
        background-position: 98% 50%;
      }
    }
  }
`;

const Form = ({
  formFields,
  register,
  errors,
  isValid,
  onSubmit,
  payloadPosting,
  formMessage,
}) => {
  formFields = stegaClean(`${formFields}`);
  formFields = checkValidJS(`return ${formFields}`)
    ? new Function(`return ${formFields}`)()
    : null;
  parse(`return ${formFields}`);
  const pathname = usePathname();

  // console.log(formFields);
  return (
    <Component className="c__form">
      {formFields && formFields.constructor === Array ? (
        <form onSubmit={onSubmit} autoComplete="off">
          <input
            type="hidden"
            value={`${baseUrl}${pathname}`}
            {...register("page_url")}
          />
          <div className="c__form__fields-wrapper">
            {formFields.map((elem) => {
              const {
                name,
                label,
                placeholder,
                type,
                width,
                required,
                pattern,
                defaultValue,
              } = elem;
              return (
                <div
                  key={name}
                  className={`c__form__fieldset c__form__fieldset--${width} ${
                    type === "hidden" ? `c__form__fieldset--hidden` : ``
                  }`}
                >
                  <div className="c__form__field">
                    {label && (
                      <label className="c__form__label" htmlFor={name}>
                        {label}
                      </label>
                    )}
                    <div className="c__form__input-wrapper">
                      {type === "textarea" ? (
                        <textarea
                          className={`c__form__input ${
                            errors[elem.name] ? `c__form__input--error` : ``
                          }`}
                          name={name}
                          type={type}
                          placeholder={placeholder}
                          defaultValue={defaultValue ? defaultValue : null}
                          {...register(name, {
                            required: required ? required.message : required,
                            pattern: pattern ? pattern : null,
                          })}
                        ></textarea>
                      ) : (
                        <input
                          className={`c__form__input ${
                            errors[elem.name] ? `c__form__input--error` : ``
                          }`}
                          name={name}
                          type={type}
                          placeholder={placeholder}
                          defaultValue={defaultValue ? defaultValue : null}
                          {...register(name, {
                            required: required ? required.message : required,
                            pattern: pattern ? pattern : null,
                          })}
                        />
                      )}
                    </div>
                  </div>
                  {errors[elem.name] && (
                    <div id={`${elem.name}-error`} className="c__form__error">
                      <span>{errors[elem.name].message}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="c__form__button-wrapper">
            <Button
              actionable
              title="Get Started"
              type="submit"
              isLoading={payloadPosting}
              // isDisabled={!isValid}
            />
          </div>
          {formMessage && (
            <div
              className={`c__form__message c__form__message--${formMessage.type}`}
            >
              {parse(formMessage.message)}
            </div>
          )}
        </form>
      ) : (
        <div className={`c__form__message c__form__message--error`}>
          Error rendering the form. <br />
          Please check form fields are set up corectly
        </div>
      )}
    </Component>
  );
};

export default Form;
