import DogAction from "../../Actions/DogAction";
import { useAppDispatch } from "../../redux/Hooks";
import { setFilterResponseObject } from "../../redux/slices/filterResponseObjectSlice";

import { setNextUrl, setPrevUrl } from "../../redux/slices/tableDataPropsSlice";

export const useFetchNextData = () => {
  const dispatch = useAppDispatch();

  const fetchNextData = async (url: string) => {
    try {
      const nextPageResponse = await DogAction.fetchNextPageData(url);

      dispatch(setFilterResponseObject(nextPageResponse));

      dispatch(setNextUrl(nextPageResponse.next));
      dispatch(setPrevUrl(nextPageResponse.prev));
    } catch (err: any) {
      console.log(err + "in useFetchNextPrevData");
    }
  };

  return { fetchNextData };
};
