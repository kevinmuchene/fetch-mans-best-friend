import { Container } from "@mui/material";
import DogFilterComponent from "./DogFilterComponent";
import DogSearchResult from "./DogSearchResult";
import { useState } from "react";

function SearchPage() {
  const [apiResultObject, setApiResultObject] = useState({});
  console.log(apiResultObject);
  return (
    <Container>
      <DogFilterComponent setApiResultObject={setApiResultObject} />

      {apiResultObject.resultIds && (
        <DogSearchResult apiResultObject={apiResultObject} />
      )}
    </Container>
  );
}

export default SearchPage;
