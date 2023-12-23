import { useFormik } from "formik";
import { TypeIntialValues } from "../common/Interfaces";
import * as Yup from "yup";
import { ageValidationSchema } from "../common/YupValidation";
import { createUrl, processZipCodes } from "../common/HelperFunctions";
import { setFilterValuesData } from "../redux/slices/filterValuesSlice";
import { useSearchDogs } from "../components/custom-hooks/useSearchDogs";
import { useAppDispatch, useAppSelector } from "../redux/Hooks";
import { selectSortingStrategy } from "../redux/slices/sortingStrategySlice";

let initialValues: TypeIntialValues = {
  breeds: [],
  zipCodes: "",
  ageMin: "",
  ageMax: "",
};

export const useFormikFom = () => {
  const dispatch = useAppDispatch();
  const { searchDogs } = useSearchDogs();
  const { sortingStrategy } = useAppSelector(selectSortingStrategy);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(ageValidationSchema),
    onSubmit: (values, { resetForm }) => {
      const validZipCodes = processZipCodes(values.zipCodes);

      let filterValues = {
        breeds: values.breeds,
        ageMin: values.ageMin,
        ageMax: values.ageMax,
        validZipCodes,
      };

      let url = createUrl(
        values.breeds,
        values.ageMin,
        values.ageMax,
        validZipCodes,
        sortingStrategy
      );
      dispatch(setFilterValuesData(filterValues));
      searchDogs(url);
      resetForm();
    },
  });

  return { formik };
};
