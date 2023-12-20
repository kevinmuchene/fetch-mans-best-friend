import DogAction from "../../Actions/DogAction";
import { useAppDispatch } from "../../redux/Hooks";

import {
  setNextUrl,
  setPrevUrl,
  setTablesData,
} from "../../redux/slices/tableDataPropsSlice";

export const useFetchNextData = () => {
  const dispatch = useAppDispatch();

  const fetchNextData = async (url: string) => {
    try {
      const nextPageResponse = await DogAction.fetchNextPageData(url);

      const newDogsData = await DogAction.fetchDogs(nextPageResponse.resultIds);
      console.log(newDogsData);
      console.log(nextPageResponse.next);
      dispatch(setTablesData(newDogsData));

      dispatch(setNextUrl(nextPageResponse.next));
      dispatch(setPrevUrl(nextPageResponse.prev));
    } catch (err: any) {
      console.log(err + "in useFetchNextPrevData");
    }
  };

  return { fetchNextData };
};
