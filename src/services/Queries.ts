import { useQuery } from "@tanstack/react-query";
import DogAction from "../Actions/DogAction";
import { useAppDispatch, useAppSelector } from "../redux/Hooks";
import { selectFilterResponseObject } from "../redux/slices/filterResponseObjectSlice";
import { setNextUrl, setPrevUrl } from "../redux/slices/tableDataPropsSlice";
import { useEffect } from "react";
import LocationAction from "../Actions/LocationAction";
import { LocationType } from "../common/Interfaces";

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

  useEffect(() => {
    dispatch(setNextUrl(filterResponseObject.next));
    dispatch(
      setPrevUrl(filterResponseObject.prev ? filterResponseObject.prev : "")
    );
  }, [filterResponseObject.next, filterResponseObject.prev]);

  return useQuery<Dog[]>({
    queryKey: ["dogData"],
    queryFn: () => DogAction.fetchDogs(filterResponseObject.resultIds),
  });
}

export function useFetchLocationByZip(zipcode: string[]) {
  return useQuery<LocationType[]>({
    queryKey: ["location"],
    queryFn: () => LocationAction.fetchLocationByZip(zipcode),
  });
}
