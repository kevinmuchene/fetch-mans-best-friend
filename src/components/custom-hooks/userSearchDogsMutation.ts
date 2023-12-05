import DogAction from "../../Actions/DogAction";

import { useMutation } from "@tanstack/react-query";

export const useSearchDogsMutation = () => {
  return useMutation({
    mutationFn: (url: string) => {
      return DogAction.searchDogs(url);
    },
  });
};
