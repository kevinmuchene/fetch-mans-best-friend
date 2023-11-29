import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, Card, CardContent } from "@mui/material";

import React from "react";

export default function BreedBasedActivity({
  open,
  handleClose,
  aiGeneratedActivities,
  dogName,
}: {
  open: boolean;
  handleClose: () => void;
  aiGeneratedActivities: any;
  dogName: string;
}) {
  const isObjectEmpty = (obj: {}) => Object.keys(obj).length === 0;

  return (
    <React.Fragment>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={"md"}
        fullWidth={true}
      >
        <DialogTitle color="orange">Activities For {dogName}</DialogTitle>
        <DialogContent>
          {isObjectEmpty(aiGeneratedActivities) ? (
            <p>No activities available.</p>
          ) : (
            Object.entries(aiGeneratedActivities).map(([key, data]) => (
              <Card key={key} sx={{ margin: "1em" }}>
                <CardContent>
                  <Typography variant="body2">{data as string}</Typography>
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
