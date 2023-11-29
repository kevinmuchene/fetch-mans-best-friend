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
import { useFetchLocationByZip } from "./custom-hooks/useFetchLocationByZip";

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  fontSize: "0.9rem",
  letterSpacing: "0.1rem",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
  display: "inline-block",
}));

export default function DogCard({ zipcode }: { zipcode: string[] }) {
  const [open, setOpen] = useState<boolean>(false);

  const { aiGeneratedActivities, matchDogData, matchLocation } =
    useContext(DogContext);

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
            sx={{ height: 240 }}
            image={matchDogData[0].img}
            title={matchDogData[0].name}
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>Name: </Typography>
                <StyledTypography>{matchDogData[0].name}</StyledTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>Age: </Typography>
                <StyledTypography>{matchDogData[0].age}</StyledTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>Breed: </Typography>
                <StyledTypography>{matchDogData[0].breed}</StyledTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>Zipcode: </Typography>
                <StyledTypography>{matchDogData[0].zip_code}</StyledTypography>
              </Grid>
            </Grid>
            {matchLocation.length > 0 ? (
              <Grid container spacing={2} marginTop={"0.1rem"}>
                <Grid item md={6} xs={12}>
                  <Typography component={"span"}>City: </Typography>
                  <StyledTypography>{matchLocation[0].city}</StyledTypography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography component={"span"}>County: </Typography>
                  <StyledTypography>{matchLocation[0].county}</StyledTypography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography component={"span"}>Latitude: </Typography>
                  <StyledTypography>
                    {matchLocation[0].latitude}
                  </StyledTypography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography component={"span"}>Longitude: </Typography>
                  <StyledTypography>
                    {matchLocation[0].longitude}
                  </StyledTypography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography component={"span"}>State: </Typography>
                  <StyledTypography>{matchLocation[0].state}</StyledTypography>
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
              <Typography color={"blue"} sx={{ marginLeft: "1em" }}>
                Getting Activities...
              </Typography>
            )}
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
