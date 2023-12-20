import { Typography, Container, Grid, Button, Alert } from "@mui/material";
import DogCard from "./DogCard";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/Hooks";
import { clearFavoriteIDs } from "../redux/slices/favoriteDogsIdSlice";
import {
  clearMatchDogData,
  selectMatchDog,
} from "../redux/slices/matchDogSlice";
import { setAIGneratedActivities } from "../redux/slices/aiGeneratedActivitesSlice";
import { setMatchLocationData } from "../redux/slices/matchLocationSlice";
import { useMatchDogData } from "./custom-hooks/useMatchDogData";

function FavDogsComponent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const matchDogData = useAppSelector(selectMatchDog);

  const { zipcode } = useMatchDogData();

  const handleBackButtonActivities = () => {
    dispatch(clearMatchDogData());
    dispatch(setAIGneratedActivities({}));
    dispatch(setMatchLocationData([]));
    dispatch(clearFavoriteIDs());
    navigate("/dogs");
  };

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
              <Button onClick={handleBackButtonActivities} variant="outlined">
                Back
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          {matchDogData.matchDog.length == 0 && (
            <Alert sx={{ marginTop: "1em" }} variant="filled" severity="info">
              Search and Filter Again to see your match
            </Alert>
          )}
          {matchDogData.matchDog.length > 0 && <DogCard zipcode={zipcode} />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default FavDogsComponent;
