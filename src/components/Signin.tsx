import { Container, Grid } from "@mui/material";
import LoginCard from "./SigninCard";

function Login() {
  return (
    <Container sx={{ marginTop: "1em" }}>
      <Grid container>
        <Grid
          xs={12}
          item
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoginCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
