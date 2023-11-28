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
      .then((res) => {
        console.log(res + "successfully signed out user");
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
              component="img"
              sx={{
                maxHeight: { xs: 50, md: 100 },
                maxWidth: { xs: 50, md: 100 },
              }}
              alt="Man's best friend"
              src={
                "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-cldnry.s-nbcnews.com%2Fimage%2Fupload%2Ft_nbcnews-fp-1200-630%2Cf_auto%2Cq_auto%3Abest%2Frockcms%2F2022-08%2F220805-border-collie-play-mn-1100-82d2f1.jpg&tbnid=ODrWiJnFJcNTtM&vet=12ahUKEwj2nMiPwOeCAxUKKdAFHY3CAEIQMygOegUIARCBAg..i&imgrefurl=https%3A%2F%2Fwww.nbcnews.com%2Fhealth%2Fhealth-news%2Fsigns-dog-intelligence-gifted-dogs-play-study-finds-rcna41534&docid=k7BBLaWotRbDIM&w=1200&h=630&q=image%20dog&ved=2ahUKEwj2nMiPwOeCAxUKKdAFHY3CAEIQMygOegUIARCBAg"
              }
            />
          </Hidden>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, padding: "0.5em" }}
            color={"orange"}
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
