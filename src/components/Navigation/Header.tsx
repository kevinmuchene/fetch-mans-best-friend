import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dog from "../../assets/manbestfriend.jpg";
import { Hidden } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        style={{ border: "2px groove orange" }}
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
              src={dog}
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
          <Hidden mdUp>
            <Button size="small" color="inherit">
              <Typography color={"orange"}>Logout</Typography>
            </Button>
          </Hidden>

          <Hidden mdDown>
            <Button
              endIcon={<LogoutIcon color="warning" />}
              size="small"
              color="inherit"
            >
              <Typography color={"orange"}>Logout</Typography>
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
