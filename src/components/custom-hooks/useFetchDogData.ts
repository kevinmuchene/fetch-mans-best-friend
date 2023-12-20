import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { selectFilterResponseObject } from "../../redux/slices/filterResponseObjectSlice";
import DogAction from "../../Actions/DogAction";

import {
  setNextUrl,
  setPaginationCount,
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

      dispatch(setPaginationCount(filterResponseObject.total));

      dispatch(setNextUrl(filterResponseObject.next));
    } else {
      console.log("Nothing to do");
    }
  };

  return { fetchDogData };
};
