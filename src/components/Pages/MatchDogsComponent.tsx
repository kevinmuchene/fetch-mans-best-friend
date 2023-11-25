import { Typography, Container, Button, Grid } from "@mui/material";
import DogCard from "./DogCard";
import { useContext, useEffect, useState } from "react";
import { DogContext } from "../../context/DogContext";
import DogAction from "../../Actions/DogAction";
import { useNavigate } from "react-router-dom";

function FavDogsComponent() {
  const { favoriteDogs } = useContext(DogContext);

  const [favoriteDog, setFavoriteDog] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    const fetchFavoriteMatchAndDogs = async () => {
      if (favoriteDog.length === 0) {
        try {
          const matchResponse = await DogAction.fetchFavoriteMatch(
            favoriteDogs
          );

          const matchId = [];

          matchId.push(matchResponse.match);

          const dogsResponse = await DogAction.fetchDogs(matchId);

          setFavoriteDog(dogsResponse);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchFavoriteMatchAndDogs();
  }, [favoriteDogs]);

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={12}>
          <Typography variant="h4" color="orange" sx={{ m: 3 }}>
            We Got A Match For You
          </Typography>
        </Grid>
        <Grid item md={12}>
          {favoriteDog.length > 0 && <DogCard data={favoriteDog[0]} />}
        </Grid>
        <Grid item md={12}>
          <Button onClick={() => navigation("/dogs")}>Back</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FavDogsComponent;
