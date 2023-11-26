import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Grid, Box } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import BreedBasedActivity from "./BreedBasedActvity";
import useGenerateActivities from "../common/openAI/TransformAIResponseObject";
import { DogContext } from "../context/DogContext";
import { useNavigate } from "react-router-dom";
import { useFetchLocationByZip } from "./custom-hooks/useFetchLocationByZip";

export default function DogCard({ zipcode }) {
  const [open, setOpen] = useState<boolean>(false);

  const { aiGeneratedActivities, matchDogData, matchLocation } =
    useContext(DogContext);

  const navigation = useNavigate();

  const [generatedActivityByAI] = useGenerateActivities();

  useFetchLocationByZip(zipcode);

  const isObjectEmpty = (obj: {}) => Object.keys(obj).length === 0;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    generatedActivityByAI(matchDogData[0]);
    // debugger;
  }, [matchDogData]);

  return (
    <>
      <BreedBasedActivity
        open={open}
        handleClose={handleClose}
        aiGeneratedActivities={aiGeneratedActivities}
        dogName={matchDogData[0].name}
      />
      <Box display={"flex"} justifyContent={"center"}>
        <Card>
          <CardMedia
            sx={{ height: 340 }}
            image={matchDogData[0].img}
            title={matchDogData[0].name}
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Name: {matchDogData[0].name}
                </Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Age: {matchDogData[0].age}
                </Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Breed: {matchDogData[0].breed}
                </Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Zipcode: {matchDogData[0].zip_code}
                </Typography>
              </Grid>
            </Grid>
            {matchLocation.length > 0 ? (
              <Grid container spacing={2} marginTop={1}>
                <Grid item md={6} xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    City: {matchLocation[0].city}
                  </Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    County:{matchLocation[0].county}
                  </Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Latitude: {matchLocation[0].latitude}
                  </Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Longitude: {matchLocation[0].longitude}
                  </Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    State: {matchLocation[0].state}
                  </Typography>
                </Grid>
              </Grid>
            ) : null}
          </CardContent>
          <CardActions>
            <Button
              disabled={isObjectEmpty(aiGeneratedActivities) ? true : false}
              onClick={handleClickOpen}
            >
              Activities for {matchDogData[0].name}
            </Button>
            {/* <LinearProgress color="inherit" /> */}
            {isObjectEmpty(aiGeneratedActivities) && (
              <Typography color={"blue"}>Getting Activities...</Typography>
            )}
          </CardActions>
        </Card>
      </Box>
      <Box display={"flex"} justifyContent={"center"} margin={"1em"}>
        <Button onClick={() => navigation("/dogs")}>Back</Button>
      </Box>
    </>
  );
}
