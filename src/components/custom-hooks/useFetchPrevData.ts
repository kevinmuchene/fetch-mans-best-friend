import DogAction from "../../Actions/DogAction";
import { useAppDispatch } from "../../redux/Hooks";
import { setFilterResponseObject } from "../../redux/slices/filterResponseObjectSlice";
import { setNextUrl, setPrevUrl } from "../../redux/slices/tableDataPropsSlice";

export const useFetchPrevData = () => {
  const dispatch = useAppDispatch();

  const fetchPrevData = async (url: string) => {
    try {
      const prevPageResponse = await DogAction.fetchNextPageData(url);

      dispatch(setFilterResponseObject(prevPageResponse));

      dispatch(setNextUrl(prevPageResponse.next));
      dispatch(setPrevUrl(prevPageResponse.prev));
    } catch (err: any) {
      console.log(err + "in useFetchNextPrevData");
    }
  };

  return { fetchPrevData };
};
