import { Alert, Container } from "@mui/material";
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
      ) : (
        <Alert severity="info" variant="filled">
          Click Search Button To Show Data{" "}
        </Alert>
      )}
    </Container>
  );
}

export default SearchPage;
