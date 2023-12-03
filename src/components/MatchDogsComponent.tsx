import { Typography, Container, Grid, Button, Alert } from "@mui/material";
import DogCard from "./DogCard";
import { useContext, useEffect, useState } from "react";
import { DogContext } from "../context/DogContext";
import DogAction from "../Actions/DogAction";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/Hooks";
import { selectFavoriteIDs } from "../redux/slices/favoriteDogsIdSlice";

function FavDogsComponent() {
  const { setMatchDogData, matchDogData } = useContext(DogContext);
  const navigate = useNavigate();

  const favoriteIDs = useAppSelector(selectFavoriteIDs);

  const [zipcode, setZipcode] = useState<string[]>([]);

  useEffect(() => {
    if (favoriteIDs.favoriteDogsId.length > 0) {
      const fetchFavoriteMatchDog = async () => {
        try {
          const matchResponse = await DogAction.fetchFavoriteMatch(
            favoriteIDs.favoriteDogsId.slice(0, 100)
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
  }, [favoriteIDs]);

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={12}>
          <Grid
            container
            item
            md={12}
            alignItems="center"
            justifyContent="space-around"
          >
            <Grid item>
              <Typography variant="h4" color="orange">
                A Match For You
              </Typography>
            </Grid>

            <Grid item>
              <Button onClick={() => navigate("/dogs")}>Back</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          {matchDogData.length == 0 && (
            <Alert sx={{ marginTop: "1em" }} severity="error">
              Filter Again
            </Alert>
          )}
          {matchDogData.length > 0 && <DogCard zipcode={zipcode} />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default FavDogsComponent;
