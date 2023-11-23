import { TextField, Container, Box, Grid, Button } from "@mui/material";
import DogFilterComponent from "./DogFilterComponent";
import DogSearchResult from "./DogSearchResult";
import { useEffect, useState } from "react";
import dogAction from "../../Actions/DogAction";

function SearchPage() {
  const [dogDataArray, setDogDataArray] = useState({});
  const [dogData, setDogData] = useState([]);
  const [initialDogData, setInitialDogData] = useState([]);

  // dogDataArray.resultIds.push("df");
  // console.log(dogArrayDataIds);
  // console.log(dogDataArray);

  useEffect(() => {
    function fetchInitialDogData() {
      dogAction
        .fetchDogs(dogDataArray.resultIds)
        .then((res) => {
          // console.log(res);
          setInitialDogData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchInitialDogData();
  }, [dogDataArray]);

  return (
    <Container>
      <DogFilterComponent setDogDataArray={setDogDataArray} />
      <DogSearchResult
        // dogIDs={dogDataArray.resultIds}
        initialDogData={initialDogData}
        nextApi={dogDataArray.next}
      />
    </Container>
  );
}

export default SearchPage;
