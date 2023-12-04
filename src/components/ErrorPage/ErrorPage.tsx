import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Container>
      <Typography variant="h3" color={"red"}>
        Sorry, this page does not exist
      </Typography>

      <Link to={"/"}>
        <Button sx={{ marginTop: "2em" }} variant="contained" color="primary">
          Sign In
        </Button>
      </Link>
    </Container>
  );
}

export default ErrorPage;
