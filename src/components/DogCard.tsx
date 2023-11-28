import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Grid, Box, styled } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import BreedBasedActivity from "./BreedBasedActvity";
import useGenerateActivities from "../common/openAI/TransformAIResponseObject";
import { DogContext } from "../context/DogContext";
import { useNavigate } from "react-router-dom";
import { useFetchLocationByZip } from "./custom-hooks/useFetchLocationByZip";
import { DogZipCode } from "../common/Interfaces";

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  fontSize: "1rem",
  letterSpacing: "0.1rem",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
  display: "inline-block",
}));

export default function DogCard({ zipcode }: { zipcode: DogZipCode[] }) {
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
  }, []);

  return (
    <>
      <BreedBasedActivity
        open={open}
        handleClose={handleClose}
        aiGeneratedActivities={aiGeneratedActivities}
        dogName={matchDogData[0].name}
      />
      <Box display={"flex"} justifyContent={"center"} sx={{ my: 3 }}>
        <Card>
          <CardMedia
            sx={{ height: 340 }}
            image={matchDogData[0].img}
            title={matchDogData[0].name}
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} xs={6}>
                <StyledTypography>
                  Name: {matchDogData[0].name}
                </StyledTypography>
              </Grid>
              <Grid item md={6} xs={6}>
                <StyledTypography>Age: {matchDogData[0].age}</StyledTypography>
              </Grid>
              <Grid item md={6} xs={6}>
                <StyledTypography>
                  Breed: {matchDogData[0].breed}
                </StyledTypography>
              </Grid>
              <Grid item md={6} xs={6}>
                <StyledTypography>
                  Zipcode: {matchDogData[0].zip_code}
                </StyledTypography>
              </Grid>
            </Grid>
            {matchLocation.length > 0 ? (
              <Grid container spacing={2} marginTop={"0.1rem"}>
                <Grid item md={6} xs={6}>
                  <StyledTypography>
                    City: {matchLocation[0].city}
                  </StyledTypography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <StyledTypography>
                    County:{matchLocation[0].county}
                  </StyledTypography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <StyledTypography>
                    Latitude: {matchLocation[0].latitude}
                  </StyledTypography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <StyledTypography>
                    Longitude: {matchLocation[0].longitude}
                  </StyledTypography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <StyledTypography>
                    State: {matchLocation[0].state}
                  </StyledTypography>
                </Grid>
              </Grid>
            ) : null}
          </CardContent>
          <CardActions sx={{ justifyContent: "center", py: 2 }}>
            <Button
              disabled={isObjectEmpty(aiGeneratedActivities) ? true : false}
              onClick={handleClickOpen}
              variant={
                isObjectEmpty(aiGeneratedActivities) ? "outlined" : "contained"
              }
              sx={{ borderRadius: 1 }}
              color="success"
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
        <Button onClick={() => navigation("/dogs")} sx={{ borderRadius: 1 }}>
          Back
        </Button>
      </Box>
    </>
  );
}
