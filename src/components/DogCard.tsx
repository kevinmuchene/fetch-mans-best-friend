import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Grid, Box, styled } from "@mui/material";
import { useState, useEffect } from "react";
import BreedBasedActivity from "./BreedBasedActvity";
import useGenerateActivities from "../common/openAI/TransformAIResponseObject";
import { useFetchLocationByZip } from "./custom-hooks/useFetchLocationByZip";
import { useAppSelector } from "../redux/Hooks";
import { selectMatchDog } from "../redux/slices/matchDogSlice";
import { selectMatchLocation } from "../redux/slices/matchLocationSlice";
import { selectAIGeneratedActivies } from "../redux/slices/aiGeneratedActivitesSlice";

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
  const { matchDog } = useAppSelector(selectMatchDog);
  const { locationData } = useAppSelector(selectMatchLocation);

  const { generatedActivities } = useAppSelector(selectAIGeneratedActivies);
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
    generatedActivityByAI(matchDog[0]);
  }, []);

  return (
    <>
      <BreedBasedActivity
        open={open}
        handleClose={handleClose}
        aiGeneratedActivities={generatedActivities}
        dogName={matchDog[0].name}
      />
      <Box display={"flex"} justifyContent={"center"} sx={{ my: 3 }}>
        <Card>
          <CardMedia
            sx={{ height: 240 }}
            image={matchDog[0].img}
            title={matchDog[0].name}
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>Name: </Typography>
                <StyledTypography>{matchDog[0].name}</StyledTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>Age: </Typography>
                <StyledTypography>{matchDog[0].age}</StyledTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>Breed: </Typography>
                <StyledTypography>{matchDog[0].breed}</StyledTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>Zipcode: </Typography>
                <StyledTypography>{matchDog[0].zip_code}</StyledTypography>
              </Grid>
            </Grid>
            {locationData.length > 0 ? (
              <Grid container spacing={2} marginTop={"0.1rem"}>
                <Grid item md={6} xs={12}>
                  <Typography component={"span"}>City: </Typography>
                  <StyledTypography>{locationData[0].city}</StyledTypography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography component={"span"}>County: </Typography>
                  <StyledTypography>{locationData[0].county}</StyledTypography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography component={"span"}>Latitude: </Typography>
                  <StyledTypography>
                    {locationData[0].latitude}
                  </StyledTypography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography component={"span"}>Longitude: </Typography>
                  <StyledTypography>
                    {locationData[0].longitude}
                  </StyledTypography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography component={"span"}>State: </Typography>
                  <StyledTypography>{locationData[0].state}</StyledTypography>
                </Grid>
              </Grid>
            ) : null}
          </CardContent>
          <CardActions sx={{ justifyContent: "center", py: 2 }}>
            <Button
              disabled={isObjectEmpty(generatedActivities) ? true : false}
              onClick={handleClickOpen}
              variant={
                isObjectEmpty(generatedActivities) ? "outlined" : "contained"
              }
              sx={{ borderRadius: 1 }}
              color="success"
            >
              Activities for {matchDog[0].name}
            </Button>
            {/* <LinearProgress color="inherit" /> */}
            {isObjectEmpty(generatedActivities) && (
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
