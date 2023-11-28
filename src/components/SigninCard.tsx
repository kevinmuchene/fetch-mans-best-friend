import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import authAction from "../Actions/AuthAction";
import {
  CustomErrorDiv,
  signInValidationSchema,
} from "../common/YupValidation";
import * as Yup from "yup";

const SignIn = function SiginCard() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object(signInValidationSchema),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      authAction
        .signin(values)
        .then((res) => {
          console.log(res);
          navigate("/dogs");
        })
        .catch((err) => {
          console.log("Error in signing in user" + err);
        });
      resetForm();
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                my: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography color={"orange"} variant="h4">
                Welcome
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                color="warning"
                name="name"
                label="Name"
                type="name"
                id="name"
                autoComplete="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <CustomErrorDiv>{formik.errors.name}</CustomErrorDiv>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                color="warning"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <CustomErrorDiv>{formik.errors.email}</CustomErrorDiv>
              ) : null}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
