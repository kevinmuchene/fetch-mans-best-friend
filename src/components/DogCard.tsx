import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {
  Typography,
  Grid,
  Box,
  styled,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useState, useEffect } from "react";
import BreedBasedActivity from "./BreedBasedActvity";
import useGenerateActivities from "../common/openAI/TransformAIResponseObject";
import { useAppSelector } from "../redux/Hooks";
import { selectMatchDog } from "../redux/slices/matchDogSlice";
import { selectAIGeneratedActivies } from "../redux/slices/aiGeneratedActivitesSlice";
import { useFetchLocationByZip } from "../services/Queries";

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  fontSize: "0.9rem",
  letterSpacing: "0.1rem",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
  display: "inline-block",
}));

interface DogCardProps {
  zipcode: string[];
}

export default function DogCard({ zipcode }: DogCardProps) {
  const [open, setOpen] = useState<boolean>(false);
  const { matchDog } = useAppSelector(selectMatchDog);
  const { generatedActivities } = useAppSelector(selectAIGeneratedActivies);
  const [generatedActivityByAI] = useGenerateActivities();

  const {
    isPending,
    isError,
    data: locationData,
  } = useFetchLocationByZip(zipcode);

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

  if (isPending) {
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>;
  }

  if (isError) {
    <Alert variant="filled" severity="error">
      Something went wrong!! Retrying...
    </Alert>;
  }

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
            sx={{ height: 440 }}
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

            <Grid container spacing={2} marginTop={"0.1rem"}>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>City: </Typography>
                <StyledTypography>{locationData?.[0]?.city}</StyledTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>County: </Typography>
                <StyledTypography>{locationData?.[0]?.county}</StyledTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>Latitude: </Typography>
                <StyledTypography>
                  {locationData?.[0]?.latitude}
                </StyledTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>Longitude: </Typography>
                <StyledTypography>
                  {locationData?.[0]?.longitude}
                </StyledTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography component={"span"}>State: </Typography>
                <StyledTypography>{locationData?.[0]?.state}</StyledTypography>
              </Grid>
            </Grid>
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
