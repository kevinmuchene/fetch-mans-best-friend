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
  console.log(dogDataArray);

  // useEffect(() => {
  //   setDogArrayDataIds(dogDataArray.resultIds);
  //   function fetchDogs() {
  //     dogAction
  //       .fetchDogs(dogDataArray.resultIds)
  //       .then((res) => {
  //         console.log(res);
  //         setDogData((data) => [...data, ...res]);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   fetchDogs();
  // }, [dogDataArray]);

  return (
    <Container>
      <DogFilterComponent setDogDataArray={setDogDataArray} />
      <DogSearchResult
        dogIDs={dogDataArray.resultIds}
        nextApi={dogDataArray.next}
      />
      <Button onClick={() => setCount((prev) => prev + 1)}>test</Button>
    </Container>
  );
}

export default SearchPage;
