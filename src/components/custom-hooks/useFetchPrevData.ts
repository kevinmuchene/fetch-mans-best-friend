import DogAction from "../../Actions/DogAction";
import { useAppDispatch } from "../../redux/Hooks";
import {
  setNextUrl,
  setPrevUrl,
  setTablesData,
} from "../../redux/slices/tableDataPropsSlice";

export const useFetchPrevData = () => {
  const dispatch = useAppDispatch();

  const fetchPrevData = async (url: string) => {
    try {
      const nextPageResponse = await DogAction.fetchNextPageData(url);

      const newDogsData = await DogAction.fetchDogs(nextPageResponse.resultIds);

      dispatch(setTablesData(newDogsData));

      dispatch(setNextUrl(nextPageResponse.next));
      dispatch(setPrevUrl(nextPageResponse.prev));
    } catch (err: any) {
      console.log(err + "in useFetchNextPrevData");
    }
  };

  return { fetchPrevData };
};
