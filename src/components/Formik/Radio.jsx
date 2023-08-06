import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

export default function Radio(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {(renderProps) => {
          const { field } = renderProps;
          return options.map((option) => {
            return (
              <React.Fragment key={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
