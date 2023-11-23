import { Typography, Grid, Container } from "@mui/material";
import DogCard from "./DogCard";
import { useContext, useEffect, useState } from "react";
import { DogContext } from "../../context/DogContext";
import DogAction from "../../Actions/DogAction";

function FavDogsComponent() {
  const { favoriteDogs } = useContext(DogContext);

  const [favoriteDog, setFavoriteDog] = useState([]);

  useEffect(() => {
    const fetchFavoriteMatchAndDogs = async () => {
      try {
        const matchResponse = await DogAction.fetchFavoriteMatch(favoriteDogs);

        const arrayId = [];

        arrayId.push(matchResponse.match);

        const dogsResponse = await DogAction.fetchDogs(arrayId);

        setFavoriteDog(dogsResponse);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFavoriteMatchAndDogs();
  }, [favoriteDogs]);
  return (
    <>
      <Typography variant="h4" align="center" color="orange" sx={{ m: 3 }}>
        We Got A Match For You
      </Typography>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {favoriteDog.length > 0 && <DogCard data={favoriteDog[0]} />}
      </Container>
    </>
  );
}

export default FavDogsComponent;
