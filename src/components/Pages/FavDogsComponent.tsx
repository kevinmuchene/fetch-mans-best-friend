import { Typography, Grid, Container } from "@mui/material";
import DogCard from "./DogCard";
import { useContext, useEffect, useState } from "react";
import { DogContext } from "../../context/DogContext";

function FavDogsComponent() {
  const { favoriteDogs } = useContext(DogContext);

  console.log(favoriteDogs);

  // console.log

  // console.log(favoriteDogs);
  return (
    <Container>
      <Typography align="center" variant="h4" color="orange" sx={{ m: 3 }}>
        Your Favorite Dogs
      </Typography>
      <Grid container spacing={2}>
        {favoriteDogs.length > 0 ? (
          favoriteDogs.map((dog) => (
            <Grid key={dog.id} item md={4}>
              <DogCard data={dog} />
            </Grid>
          ))
        ) : (
          <h6>Try again later</h6>
        )}
      </Grid>
    </Container>
  );
}

export default FavDogsComponent;
