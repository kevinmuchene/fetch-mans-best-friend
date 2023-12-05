import { useQuery } from "@tanstack/react-query";
import DogAction from "../../Actions/DogAction";

export const useFetchBreeds = () => {
  return useQuery({
    queryKey: ["breeds"],
    queryFn: () => {
      return DogAction.fetchBreed();
    },
  });
};
