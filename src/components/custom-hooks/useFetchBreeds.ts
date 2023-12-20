import DogAction from "../../Actions/DogAction";
import { useAppDispatch } from "../../redux/Hooks";
import { setBreeds } from "../../redux/slices/breedDataSlice";

export const useFetchBreeds = () => {
  const dispatch = useAppDispatch();

  const fetchDogBreeds = async () => {
    try {
      const res = await DogAction.fetchBreed();
      dispatch(setBreeds(res));
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchDogBreeds };
};
