import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Grid } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function DogCard({ data }) {
  // console.log(data);
  return (
    <Card sx={{ maxWidth: "50%" }}>
      <CardMedia sx={{ height: 140 }} image={data.img} title="green iguana" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={6} xs={6}>
            <Typography variant="body2" color="text.secondary">
              Name: {data.name}
            </Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant="body2" color="text.secondary">
              Age: {data.age}
            </Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant="body2" color="text.secondary">
              Breed: {data.breed}
            </Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant="body2" color="text.secondary">
              Zipcode: {data.zip_code}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button disabled endIcon={<AutoStoriesIcon />}>
          story
        </Button>
      </CardActions>
    </Card>
  );
}
