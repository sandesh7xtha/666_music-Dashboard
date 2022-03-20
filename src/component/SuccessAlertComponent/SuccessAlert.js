import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
  alert: {
    color: "red",
    backgroundColor: "#333A56",
  },
}));

const SuccessAlert = () => {
  const classes = useStyles();

  //for alert dialog box after submitting.
  const [opendialog, setOpenDialog] = useState(false);
  // const handleClickOpen = () => {
  //   setOpenDialog(true);
  // };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog
        open={opendialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert className={classes.alert} onClose={() => {}}>
            This is a success alert — check it out!
          </Alert>
          {/* <Alert
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This is a success alert — check it out!
        </Alert> */}
        </Stack>
      </Dialog>
    </>
  );
};

export default SuccessAlert;
