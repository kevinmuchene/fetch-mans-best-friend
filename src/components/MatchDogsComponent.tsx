import { Typography, Container, Grid } from "@mui/material";
import DogCard from "./DogCard";
import { useContext, useEffect, useState } from "react";
import { DogContext } from "../context/DogContext";
import DogAction from "../Actions/DogAction";

function FavDogsComponent() {
  const { favoriteDogsId, setMatchDogData, matchDogData } =
    useContext(DogContext);

  const [zipcode, setZipcode] = useState<string[]>([]);

  useEffect(() => {
    if (favoriteDogsId.length > 0) {
      const fetchFavoriteMatchDog = async () => {
        try {
          const matchResponse = await DogAction.fetchFavoriteMatch(
            favoriteDogsId
          );

          const matchId = [];
          const zipCode = [];

          matchId.push(matchResponse.match);

          const dogsResponse = await DogAction.fetchDogs(matchId);
          zipCode.push(dogsResponse[0].zip_code);
          setMatchDogData(dogsResponse);
          setZipcode(zipCode);
        } catch (err) {
          console.log(err);
        }
      };
      fetchFavoriteMatchDog();
    }
  }, [favoriteDogsId]);

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={12}>
          <Typography variant="h4" align="center" color="orange" sx={{ m: 3 }}>
            A Match For You
          </Typography>
        </Grid>
        <Grid item md={12}>
          {matchDogData.length > 0 && <DogCard zipcode={zipcode} />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default FavDogsComponent;
