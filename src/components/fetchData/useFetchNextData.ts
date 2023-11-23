import { useState } from "react";
import dogService from "../../services/DogService";

const useFetchMoreData = (initialEndpoint: string) => {
  const [nextEndpoint, setNextEndpoint] = useState(initialEndpoint);
  console.log(nextEndpoint);

  const fetchMoreData = async () => {
    dogService
      .fetchNextPageData(nextEndpoint)
      .then((res) => {
        console.log(res);
        // setNextEndpoint(newData.next);
        debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { fetchMoreData, setNextEndpoint };
};

export default useFetchMoreData;
