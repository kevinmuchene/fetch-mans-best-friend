import DogAction from "../../Actions/DogAction";
import { useAppDispatch } from "../../redux/Hooks";
import { setFilterResponseObject } from "../../redux/slices/filterResponseObjectSlice";
import { setPage } from "../../redux/slices/tableStateSlice";

export const useSearchDogs = () => {
  const dispatch = useAppDispatch();

  const searchDogs = async (url: string) => {
    await DogAction.searchDogs(url)
      .then((res) => {
        dispatch(setPage(0));
        dispatch(setFilterResponseObject(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { searchDogs };
};
