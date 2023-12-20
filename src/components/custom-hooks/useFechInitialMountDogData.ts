import DogAction from "../../Actions/DogAction";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { setFilterResponseObject } from "../../redux/slices/filterResponseObjectSlice";
import { selectSortingStrategy } from "../../redux/slices/sortingStrategySlice";
import { setNextUrl } from "../../redux/slices/tableDataPropsSlice";

export const useFetchInitialMountDogData = () => {
  const dispatch = useAppDispatch();

  const { initialPageLoadSort } = useAppSelector(selectSortingStrategy);

  const onInitialMount = async () => {
    try {
      const allDogsResponse = await DogAction.fetchAllDogs(initialPageLoadSort);

      dispatch(setFilterResponseObject(allDogsResponse));
      dispatch(setNextUrl(allDogsResponse.next));
    } catch (error) {
      console.error("Error fetching dog data:", error);
    }
  };

  return { onInitialMount };
};
