import { Typography, Grid, Container } from "@mui/material";
import DogCard from "./DogCard";

function FavDogsComponent() {
  return (
    <Container>
      <Typography align="center" variant="h4" color="orange" sx={{ m: 3 }}>
        Your Favorite Dogs
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <DogCard />
        </Grid>
        <Grid item md={4}>
          <DogCard />
        </Grid>
        <Grid item md={4}>
          <DogCard />
        </Grid>
        <Grid item md={4}>
          <DogCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default FavDogsComponent;
