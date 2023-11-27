import { Container } from "@mui/material";
import DogFilterComponent from "./DogFilterComponent";
import DogTableResult from "./DogTableResult";
import { useState } from "react";

function SearchPage() {
  const [apiResultObject, setApiResultObject] = useState({});
  return (
    <Container>
      <DogFilterComponent setApiResultObject={setApiResultObject} />

      {apiResultObject.resultIds ? (
        <DogTableResult apiResultObject={apiResultObject} />
      ) : null}
    </Container>
  );
}

export default SearchPage;
