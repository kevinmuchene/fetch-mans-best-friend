import { TextField, Container, Box, Grid } from "@mui/material";
import DogFilterComponent from "./DogFilterComponent";
import DogSearchResult from "./DogSearchResult";

function SearchPage() {
  return (
    <Container>
      <DogFilterComponent />
      <DogSearchResult />
    </Container>
  );
}

export default SearchPage;
