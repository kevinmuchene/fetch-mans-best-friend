import { useQuery } from "@tanstack/react-query";
import DogAction from "../Actions/DogAction";
import { useAppDispatch, useAppSelector } from "../redux/Hooks";
import { selectFilterResponseObject } from "../redux/slices/filterResponseObjectSlice";
import { setNextUrl, setPrevUrl } from "../redux/slices/tableDataPropsSlice";

export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export function useBreeds() {
  return useQuery({
    queryKey: ["breeds"],
    queryFn: DogAction.fetchBreed,
  });
}

export function useFetchDogData() {
  const { filterResponseObject } = useAppSelector(selectFilterResponseObject);
  const dispatch = useAppDispatch();
  dispatch(setNextUrl(filterResponseObject.next));
  dispatch(
    setPrevUrl(filterResponseObject.prev ? filterResponseObject.prev : "")
  );

  return useQuery<Dog[]>({
    queryKey: ["dogData"],
    queryFn: () => DogAction.fetchDogs(filterResponseObject.resultIds),
  });
}
