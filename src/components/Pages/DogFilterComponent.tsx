import { TextField, Button, Box, Grid, Typography, Paper } from "@mui/material";
import { useFormik } from "formik";

function DogFilterComponent() {
  const formik = useFormik({
    initialValues: {
      breeds: "",
      zipCodes: "",
      ageMin: "",
      ageMax: "",
    },

    onSubmit: (values, { resetForm }) => {
      const breedsArray = values.breeds.split(",").map((breed) => breed.trim());
      const zipcodesArray = values.zipCodes
        .split(",")
        .map((zipcode) => zipcode.trim());
      const finalValues = {
        ...values,
        breeds: breedsArray,
        zipCodes: zipcodesArray,
      };

      console.log(finalValues);
      resetForm();
    },
  });

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <Box sx={{ mt: 1 }}>
        <Typography color="orange" align="center" variant="h4">
          Refine Your Search
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        onSubmit={formik.handleSubmit}
        sx={{ mt: 3, padding: 2 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              color="primary"
              id="breeds"
              label="Enter breeds seprated by comma"
              name="breeds"
              autoComplete="breeds"
              value={formik.values.breeds}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              color="warning"
              name="zipCodes"
              label="Enter zipcodes seprated by comma"
              id="zipCodes"
              autoComplete="zipCodes"
              value={formik.values.zipCodes}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              color="warning"
              name="ageMin"
              label="Min-Age"
              id="ageMin"
              autoComplete="ageMin"
              value={formik.values.ageMin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              color="warning"
              name="ageMax"
              label="Max-Age"
              id="ageMax"
              autoComplete="ageMax"
              value={formik.values.ageMax}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          color="success"
          sx={{ mt: 3, mb: 2 }}
        >
          Filter
        </Button>
      </Box>
    </Paper>
  );
}

export default DogFilterComponent;
