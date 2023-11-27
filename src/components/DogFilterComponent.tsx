import { Dispatch, SetStateAction } from "react";
import { TextField, Button, Box, Grid, Typography, Paper } from "@mui/material";
import { useFormik } from "formik";
import SelectBreedComponent from "./MultiSelectComponent";
import { useFetchBreeds } from "./custom-hooks/useFetchBreeds";
import dogAction from "../Actions/DogAction";
import * as Yup from "yup";
import { CustomErrorDiv, ageValidationSchema } from "../common/YupValidation";

interface apiResultObject {
  next: string;
  prev: string;
  resultIds: string[];
  total: number;
}

interface DogFilterComponentProps {
  setApiResultObject: Dispatch<SetStateAction<apiResultObject>>;
}

function DogFilterComponent({ setApiResultObject }: DogFilterComponentProps) {
  const formik = useFormik({
    initialValues: {
      breeds: [],
      zipCodes: "",
      ageMin: "",
      ageMax: "",
    },
    validationSchema: Yup.object(ageValidationSchema),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dogAction
        .searchDogs(
          values.breeds,
          values.ageMin,
          values.ageMax,
          values.zipCodes.split(",").join("&")
        )
        .then((res) => {
          // console.log(res);
          setApiResultObject(res);
        })
        .catch((err) => {
          console.log(err);
        });

      resetForm();
    },
  });
  console.log("Dog filter component");
  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <Box sx={{ mt: 1 }}>
        <Typography color="orange" align="center" variant="h4">
          Search By ...
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
            <SelectBreedComponent
              selectedItems={formik.values.breeds}
              setSelectedItems={(field: string, value: any) =>
                formik.setFieldValue(field, value)
              }
              // items={breedsData}
              label={"Breed"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              color="warning"
              name="zipCodes"
              label="Enter zipcode/zipcodes seprated by comma"
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
              type="number"
              autoComplete="ageMin"
              value={formik.values.ageMin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.ageMin ? (
              <CustomErrorDiv>{formik.errors.ageMin}</CustomErrorDiv>
            ) : null}
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              color="warning"
              name="ageMax"
              label="Max-Age"
              id="ageMax"
              type="number"
              autoComplete="ageMax"
              value={formik.values.ageMax}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.ageMax ? (
              <CustomErrorDiv>{formik.errors.ageMax}</CustomErrorDiv>
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
          Filter
        </Button>
      </Box>
    </Paper>
  );
}

export default DogFilterComponent;

/**
 * 
 * const afterSearchData = {
  next: "/dogs/search?breeds%5B0%5D=Dingo&breeds%5B1%5D=EntleBucher&breeds%5B2%5D=German%20Shepherd&breeds%5B3%5D=Collie&ageMax=1&ageMin=0&size=25&from=25",
  resultIds: [
    "13GFTIcBOvEgQ5OCx6sr",
    "73GFTIcBOvEgQ5OCx6sr",
    "gXGFTIcBOvEgQ5OCx64s",
    "q3GFTIcBOvEgQ5OCx64s",
    "_XGFTIcBOvEgQ5OCx64s",
    "SXGFTIcBOvEgQ5OCx809",
    "Y3GFTIcBOvEgQ5OCx809",
    "g3GFTIcBOvEgQ5OCx809",
    "K3GFTIcBOvEgQ5OCx9lG",
    "dnGFTIcBOvEgQ5OCx9lG",
    "rHGFTIcBOvEgQ5OCx9lG",
    "snGFTIcBOvEgQ5OCx9lG",
    "uHGFTIcBOvEgQ5OCx9lG",
    "uXGFTIcBOvEgQ5OCx6sq",
    "unGFTIcBOvEgQ5OCx6sq",
    "t3GFTIcBOvEgQ5OCx64s",
    "x3GFTIcBOvEgQ5OCx64s",
    "5HGFTIcBOvEgQ5OCx64s",
    "A3GFTIcBOvEgQ5OCx68s",
    "BXGFTIcBOvEgQ5OCx68s",
    "X3GFTIcBOvEgQ5OCx809",
    "ZXGFTIcBOvEgQ5OCx809",
    "b3GFTIcBOvEgQ5OCx809",
    "l3GFTIcBOvEgQ5OCx809",
    "JXGFTIcBOvEgQ5OCx9lG",
  ],
  total: 84,
};
 */
