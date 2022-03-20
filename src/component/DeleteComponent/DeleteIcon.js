import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { AiOutlineDelete } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@mui/material/Alert";

import Snackbar from "@material-ui/core/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { flexbox } from "@mui/system";
import AddButton from "../ButtonComponent/AddButton";
import { Container } from "@material-ui/core";
import image from "../../Assets/info.png";
const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    // background-color: transparent;
    backdrop-filter: blur(0px);
  }
`;

const useStyles = makeStyles((theme) => ({
  alert: {
    color: "red",
    backgroundColor: "#333A56",
  },
}));

const useStyle = makeStyles((theme) => ({
  deleteIcon: {
    fontSize: "1.2rem",
    marginLeft: "0.8rem",
    color: "#EF3B4F",
    // boxshadow: "5px 5px 30px rgba(0, 0, 0, 0.25)",

    "&:hover": {
      backgroundColor: "#84818A",
      // padding: "0.1rem",
      borderRadius: "50%",
      color: "white",
    },
  },
  alert: {
    backgroundColor: "red",
  },
  title: {
    fontSize: "1rem",
    marginTop: "1rem",
    color: "#333a56",
  },
  subtitle: {
    color: "#556191",
    fontSize: "0.8rem",
    marginTop: "0.5rem",

    align: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.2rem",
  },
  button: {
    color: "#eff0f6",
    backgroundColor: "#4b5681",
    borderRadius: "6px",
    border: "1px solid #D3CFD9 ",
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontWeight: 600,

    fontSize: ".7rem",
    textTransform: "capitalize",
    webkitTransition: ".25s cubic-bezier(.17,.67,.83,.67)",
    transition: ".25s cubic-bezier(.17,.67,.83,.67)",
    letterSpacing: ".8px",
    display: "flex",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",

    padding: ".375rem 1.7rem",
    lineHeight: "1.5",
    "&:hover": {
      backgroundColor: "transparent",

      color: "#57606B",
    },
  },
  cancleButton: {
    backgroundColor: "#d6d6c2",
    color: "#57606B",
    marginLeft: "1rem",
  },
  imgInfoDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "10rem",
    // marginTop: "1rem",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteIcon = (props) => {
  const classes = useStyle();

  //ConfirmationDialog
  const [openConfimationDialog, setOpenConfimationDialog] =
    React.useState(false);

  const handleClickOpenConfimationDialog = () => {
    setOpenConfimationDialog(true);
  };

  const handleCloseConfimationDialog = () => {
    setOpenConfimationDialog(false);
  };

  //for alert dialog box after submitting.
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  console.log(props.id);

  return (
    <>
      <Tooltip title="Delete" TransitionComponent={Zoom} arrow>
        <AiOutlineDelete
          className={classes.deleteIcon}
          onClick={handleClickOpenConfimationDialog}
          // onClick={handleClickOpen}
        />
      </Tooltip>
      {/* Confirmation Dialog */}

      <StyledDialog
        open={openConfimationDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseConfimationDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className={classes.imgInfoDiv}>
          <img src={image} className={classes.img} />
          <p className={classes.title}>Are you sure you want to delete?</p>
          <p className={classes.subtitle}>
            You will permanently lose the data.
          </p>
          <Container className={classes.buttonContainer}>
            <button
              type="button"
              onClick={() => {
                props.deleteProduct(props.id);
                handleClickOpen();
                handleCloseConfimationDialog();
              }}
              className={classes.button}
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={() => {
                handleCloseConfimationDialog();
              }}
              className={classes.button + " " + classes.cancleButton}
            >
              Cancel
            </button>
          </Container>
        </DialogContent>
        {/* <DialogActions className={classes.ButtonDiv}>
          <Button onClick={handleCloseConfimationDialog}>Disagree</Button>
          <Button
            onClick={() => {
              handleClickOpen();
              handleCloseConfimationDialog();
            }}
          >
            Agree
          </Button>
        </DialogActions> */}
      </StyledDialog>

      {/* Snack bar */}
      <Snackbar
        open={openDialog}
        autoHideDuration={1500}
        onClose={handleCloseDialog}
      >
        <Alert
          onClose={handleCloseDialog}
          style={{
            color: "#fff",
            backgroundColor: "#333A56",
            borderLeft: "1px green",
          }}
        >
          Deleted Successfully !
        </Alert>
      </Snackbar>
    </>
  );
};

export default DeleteIcon;
