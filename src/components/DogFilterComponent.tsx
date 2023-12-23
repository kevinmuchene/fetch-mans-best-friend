import { useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  Paper,
  Alert,
} from "@mui/material";

import SelectBreedComponent from "./MultiSelectComponent";
import { CustomErrorDiv } from "../common/YupValidation";
import { createUrl } from "../common/HelperFunctions";
import { useAppSelector } from "../redux/Hooks";
import { selectSortingStrategy } from "../redux/slices/sortingStrategySlice";
import { useSearchDogs } from "./custom-hooks/useSearchDogs";
import { useBreeds } from "../services/Queries";
import { useFormikFom } from "../FormikHandleForm/formikform";

function DogFilterComponent() {
  const { sortingStrategy } = useAppSelector(selectSortingStrategy);

  const { searchDogs } = useSearchDogs();

  const { formik } = useFormikFom();

  useEffect(() => {
    searchDogs(createUrl([], "", "", [], sortingStrategy));
  }, []);

  const breedsQuery = useBreeds();

  if (breedsQuery.isPending) {
    return (
      <Alert variant="filled" color="info">
        Fetching Breeds
      </Alert>
    );
  }
  if (breedsQuery.isError) {
    return (
      <Alert variant="filled" color="error">
        Breeds Cannot Be Fetch. Try Again!
      </Alert>
    );
  }

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <Box sx={{ mt: 1 }}>
        <Typography color="orange" align="center" variant="h4">
          Filter Dogs
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
              dropDownItems={breedsQuery.data}
              label={"Breed"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              color="warning"
              name="zipCodes"
              label="Enter Zipcode(s)"
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
