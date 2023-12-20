import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { selectFilterResponseObject } from "../../redux/slices/filterResponseObjectSlice";
import DogAction from "../../Actions/DogAction";

import {
  setNextUrl,
  setPrevUrl,
  setTablesData,
} from "../../redux/slices/tableDataPropsSlice";

export const useFetchDogData = () => {
  const { filterResponseObject } = useAppSelector(selectFilterResponseObject);
  const dispatch = useAppDispatch();

  const fetchDogData = async () => {
    if (filterResponseObject?.resultIds?.length) {
      const dogDetailsResponse = await DogAction.fetchDogs(
        filterResponseObject.resultIds
      );
      dispatch(setTablesData(dogDetailsResponse));

      dispatch(setNextUrl(filterResponseObject.next));
      dispatch(
        setPrevUrl(filterResponseObject.prev ? filterResponseObject.prev : "")
      );
    } else {
      console.log("Nothing to do");
    }
  };

  return { fetchDogData };
};
