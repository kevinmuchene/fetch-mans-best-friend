import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Grid } from "@mui/material";
import dogpic from "../../assets/manbestfriend.jpg";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function DogCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={dogpic} title="green iguana" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={6} xs={6}>
            <Typography variant="body2" color="text.secondary">
              Name: Name
            </Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant="body2" color="text.secondary">
              Age: age
            </Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant="body2" color="text.secondary">
              Breed: breed
            </Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant="body2" color="text.secondary">
              Zipcode: zipcode
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
