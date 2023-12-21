import { useQuery } from "@tanstack/react-query";
import DogAction from "../Actions/DogAction";

export function useBreeds() {
  return useQuery({
    queryKey: ["breeds"],
    queryFn: DogAction.fetchBreed,
  });
}
