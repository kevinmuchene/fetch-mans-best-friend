import { Container } from "@mui/material";
import DogFilterComponent from "./DogFilterComponent";
import DogTableResult from "./DogTableResult";
import { useEffect } from "react";
import { useSearchDogs } from "./custom-hooks/useSearchDogs";
import { createUrl } from "../common/HelperFunctions";
import { useAppSelector } from "../redux/Hooks";
import { selectSortingStrategy } from "../redux/slices/sortingStrategySlice";

function SearchPage() {
  const { sortingStrategy } = useAppSelector(selectSortingStrategy);
  const { searchDogs } = useSearchDogs();
  useEffect(() => {
    searchDogs(createUrl([], "", "", [], sortingStrategy));
  }, []);
  return (
    <Container>
      <DogFilterComponent />
      <DogTableResult />
    </Container>
  );
}

export default SearchPage;
