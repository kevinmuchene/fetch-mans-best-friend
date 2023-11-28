import { Container } from "@mui/material";
import DogFilterComponent from "./DogFilterComponent";
import DogTableResult from "./DogTableResult";
import { useState } from "react";

function SearchPage() {
  const [apiResultObject, setApiResultObject] = useState<any>({});

  return (
    <Container>
      <DogFilterComponent setApiResultObject={setApiResultObject} />

      <DogTableResult apiResultObject={apiResultObject} />
    </Container>
  );
}

export default SearchPage;
