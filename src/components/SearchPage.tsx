import { Container } from "@mui/material";
import DogFilterComponent from "./DogFilterComponent";
import DogTableResult from "./DogTableResult";

function SearchPage() {
  return (
    <Container>
      <DogFilterComponent />
      <DogTableResult />
    </Container>
  );
}

export default SearchPage;
