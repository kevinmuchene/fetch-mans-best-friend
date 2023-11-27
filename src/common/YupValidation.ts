import * as Yup from "yup";
import { styled } from "@mui/material/styles";

export const CustomErrorDiv = styled("div")({
  color: "red",
});

export const signInValidationSchema = {
  name: Yup.string()
    .min(3, "Must be 3 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
};

export const ageValidationSchema = {
  ageMin: Yup.number()
    .positive("Min age should be positive")
    .integer("Min age must be an integer")
    .min(0, "Minimum age cannot be less than 0")
    .max(25, "Min age can be 25 or less")
    .test(
      "is-less-than-or-equal-to-max",
      "Min age must be less than or equal to Max age",
      function (value) {
        const { ageMax } = this.parent;

        return (
          ageMax === undefined ||
          value === undefined ||
          value === null ||
          ageMax === null ||
          value <= ageMax
        );
      }
    ),

  ageMax: Yup.number()
    .positive("Max age should be positive")
    .integer("Max age must be an integer")
    .max(25, "Max age can be 15 or less")
    .test(
      "is-greater-than-or-equal-to-min",
      "Max age must be greater than or equal to Min age",
      function (value) {
        const { ageMin } = this.parent;

        return (
          ageMin === undefined ||
          value === undefined ||
          value === null ||
          ageMin === null ||
          value >= ageMin
        );
      }
    ),
};
