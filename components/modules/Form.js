"use client";
import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import Button from "./Button";
import { stegaClean } from "@sanity/client/stega";
import { checkValidJSONString, checkValidJS } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import { baseUrl } from "@/lib/constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";

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
        color: var(--t-body-color) !important;
        border: 1px solid var(--t-form-input-border-color) !important;
        outline: none !important;
        border-radius: var(--t-form-input-border-radius) !important;
        transition: 0.2s ease !important;
        box-shadow: var(--t-form-input-box-shadow) !important;
        padding: 0.65rem 0.75rem !important;
        width: 100% !important;
        font-size: 0.95rem !important;
        background-color: var(--t-cp-base-white) !important;
        &::placeholder {
          color: var(--t-form-placeholder-color) !important;
        }
        &:focus {
          border-color: var(--t-form-input-focus-border-color) !important;
          box-shadow: var(--t-form-input-focus-box-shadow) !important;
          outline: none !important;
          transition: 0.2s ease !important;
        }
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
      &__select {
        color: var(--t-body-color) !important;
        &:invalid {
          color: var(--t-form-placeholder-color) !important;
        }
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
                  control,
                  handleSubmit,
              }) => {
    formFields = stegaClean(`${formFields}`);
    if (checkValidJSONString(formFields)) {
        formFields = checkValidJS(`return ${formFields}`)
            ? new Function(`return ${formFields}`)()
            : null;
    } else {
        formFields = null;
    }
    parse(`return ${formFields}`);
    const pathname = usePathname();

    // Use handleSubmit if available; otherwise, fall back to onSubmit directly.
    const submitHandler =
        typeof handleSubmit === "function" ? handleSubmit(onSubmit) : onSubmit;

    return (
        <Component className="c__form">
            {formMessage &&
                (typeof formMessage === "object" ? (
                    <div className={`c__form__message c__form__message--${formMessage.type}`}>
                        {formMessage.message}
                    </div>
                ) : (
                    <div className="c__form__message">{formMessage}</div>
                ))}
            {formFields && formFields.constructor === Array ? (
                <form onSubmit={submitHandler} autoComplete="off">
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
                                options,
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
                                            {type === "select" ? (
                                                <select
                                                    className={`c__form__input c__form__select ${
                                                        errors[name] ? "c__form__input--error" : ""
                                                    }`}
                                                    name={name}
                                                    defaultValue=""
                                                    required
                                                    {...register(name, {
                                                        required: required ? required.message : required,
                                                    })}
                                                >
                                                    <option value="" disabled>
                                                        {placeholder || "Select an option"}
                                                    </option>
                                                    {options &&
                                                        options.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                </select>

                                            ) : type === "date" ? (
                                                <Controller
                                                    name={name}
                                                    control={control}
                                                    rules={{
                                                        required: required ? required.message : required,
                                                    }}
                                                    defaultValue={defaultValue || null}
                                                    render={({ field }) => (
                                                        <DatePicker
                                                            className={`c__form__input ${
                                                                errors[name] ? "c__form__input--error" : ""
                                                            }`}
                                                            selected={field.value ? new Date(field.value) : null}
                                                            onChange={(date) => field.onChange(date)}
                                                            dateFormat="d MMMM, yyyy"
                                                            placeholderText={placeholder}
                                                            minDate={new Date()}
                                                        />
                                                    )}
                                                />
                                            ) : (
                                                <input
                                                    className={`c__form__input ${
                                                        errors[name] ? `c__form__input--error` : ``
                                                    }`}
                                                    name={name}
                                                    type={type}
                                                    placeholder={placeholder}
                                                    defaultValue={defaultValue || ""}
                                                    {...register(name, {
                                                        required: required ? required.message : required,
                                                        pattern: pattern ? pattern : null,
                                                    })}
                                                />
                                            )}
                                        </div>
                                        {errors[name] && (
                                            <div id={`${name}-error`} className="c__form__error">
                                                <span>{errors[name].message}</span>
                                            </div>
                                        )}
                                    </div>
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
                        />
                    </div>
                </form>
            ) : (
                <div className="c__form__message c__form__message--error">
                    Error rendering the form. <br /> Please check form fields are set up correctly.
                </div>
            )}
        </Component>
    );
};

export default Form;
