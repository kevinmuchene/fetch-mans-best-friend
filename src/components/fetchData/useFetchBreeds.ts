import { useEffect, useState } from "react";
import dogAction from "../../Actions/DogAction";

export const useFetchBreeds = () => {
  const [breeds, setBreeds] = useState<[]>([]);

  useEffect(() => {
    dogAction
      .fetchBreed()
      .then((res) => setBreeds(res))
      .catch((err) => console.log(err));

    console.log("request is made");
  }, []);

  return [breeds];
};
