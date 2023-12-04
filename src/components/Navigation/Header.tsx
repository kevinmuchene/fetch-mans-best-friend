import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Hidden } from "@mui/material";
import authService from "../../services/AuthService";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const signOutUser = () => {
    authService
      .signout()
      .then(() => {
        localStorage.setItem("authorized", "");
      })
      .catch((err) => {
        console.log("Error in signing out user" + err);
      });
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          justifyContent: "space-around",
          padding: "0.4em",
          marginBottom: 4,
        }}
      >
        <Toolbar>
          <Hidden mdDown>
            <Box
              onClick={() => navigate("/dogs")}
              component="img"
              sx={{
                maxHeight: { xs: 50, md: 100 },
                maxWidth: { xs: 50, md: 100 },
              }}
              alt="Man's best friend"
              src={
                "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            />
          </Hidden>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, padding: "0.5em" }}
            color={"orange"}
            onClick={() => navigate("/dogs")}
          >
            Man's Best Friend
          </Typography>

          {pathname !== "/" ? (
            <Button size="small" color="inherit" onClick={signOutUser}>
              <Typography color={"orange"}>Logout</Typography>
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
