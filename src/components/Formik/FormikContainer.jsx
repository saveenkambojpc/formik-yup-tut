import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "./FormControl";

export default function FormikContainer() {
  const initialValues = {
    email: "",
    description: "",
    income: "",
    radio: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    income: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("form values ", values);
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormControl
            control="input"
            type="email"
            name="email"
            label="Email"
          />
          <FormControl
            control="textarea"
            type="text"
            name="description"
            label="Description"
          />
          <FormControl
            control="select"
            type="text"
            name="income"
            label="Income"
            options={[
              { key: "High", value: "high" },
              { key: "Low", value: "low" },
            ]}
          />
          <FormControl
            control="radio"
            name="radio"
            label="Select Radio"
            options={[
              { key: "High", value: "high" },
              { key: "Low", value: "low" },
            ]}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
