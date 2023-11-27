import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Slide, Typography, Card, CardContent } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BreedBasedActivity({
  open,
  handleClose,
  aiGeneratedActivities,
  dogName,
}) {
  const isObjectEmpty = (obj: {}) => Object.keys(obj).length === 0;

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={"md"}
        fullWidth={true}
      >
        <DialogTitle>Activities For {dogName}</DialogTitle>
        <DialogContent>
          {isObjectEmpty(aiGeneratedActivities) ? (
            <p>No activities available.</p>
          ) : (
            Object.entries(aiGeneratedActivities).map(([key, data]) => (
              <Card key={key} sx={{ minWidth: 275, margin: "1em" }}>
                <CardContent>
                  <Typography variant="body2">{data}</Typography>
                </CardContent>
              </Card>
            ))
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="success">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
