import { useEffect, useState } from "react";
import dogAction from "../../Actions/DogAction";

export const useFetchBreeds = () => {
  const [breeds, setBreeds] = useState<[]>([]);

  useEffect(() => {
    dogAction
      .fetchBreed()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return [breeds];
};
