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
