import { TextField, Container, Box, Grid, Button } from "@mui/material";
import DogFilterComponent from "./DogFilterComponent";
import DogSearchResult from "./DogSearchResult";
import { useEffect, useState } from "react";
import dogAction from "../../Actions/DogAction";

function SearchPage() {
  const [dogDataArray, setDogDataArray] = useState({});
  const [dogData, setDogData] = useState([]);
  const [dogArrayDataIds, setDogArrayDataIds] = useState([]);

  const [count, setCount] = useState(0);

  // dogDataArray.resultIds.push("df");
  console.log(dogArrayDataIds);
  console.log(dogDataArray.next);

  useEffect(() => {
    async function NextFetch() {
      try {
        const response = await fetch(
          `https://frontend-take-home-service.fetch.com${dogDataArray.next}`,
          {
            credentials: "include", // Include credentials in the request
          }
        );
        const newData = await response.json();
        setDogDataArray(newData);
        setDogArrayDataIds(newData.resultIds);

        debugger;

        // Update dogData and nextEndpoint
        // setNextEndpoint(newData.next);
      } catch (error) {
        console.error("Error fetching more data:", error);
      }
    }
    NextFetch();
  }, [count]);

  useEffect(() => {
    setDogArrayDataIds(dogDataArray.resultIds);
    function fetchDogs() {
      dogAction
        .fetchDogs(dogArrayDataIds)
        .then((res) => {
          console.log(res);
          setDogData((data) => [...data, ...res]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchDogs();
  }, [dogDataArray]);

  return (
    <Container>
      <DogFilterComponent setDogDataArray={setDogDataArray} />
      <DogSearchResult dogData={dogData} nextApi={dogDataArray.next} />
      <Button onClick={() => setCount((prev) => prev + 1)}>test</Button>
    </Container>
  );
}

export default SearchPage;
