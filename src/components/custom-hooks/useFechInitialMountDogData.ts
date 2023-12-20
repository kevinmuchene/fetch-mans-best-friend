import DogAction from "../../Actions/DogAction";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { selectSortingStrategy } from "../../redux/slices/sortingStrategySlice";
import {
  setNextUrl,
  setPaginationCount,
  setTablesData,
} from "../../redux/slices/tableDataPropsSlice";

export const useFetchInitialMountDogData = () => {
  const dispatch = useAppDispatch();

  const { initialPageLoadSort } = useAppSelector(selectSortingStrategy);

  const onInitialMount = async () => {
    try {
      const allDogsResponse = await DogAction.fetchAllDogs(initialPageLoadSort);
      dispatch(setPaginationCount(allDogsResponse.total));
      dispatch(setNextUrl(allDogsResponse.next));

      const dogDetailsResponse = await DogAction.fetchDogs(
        allDogsResponse.resultIds
      );

      dispatch(setTablesData(dogDetailsResponse));
    } catch (error) {
      console.error("Error fetching dog data:", error);
    }
  };

  return { onInitialMount };
};
