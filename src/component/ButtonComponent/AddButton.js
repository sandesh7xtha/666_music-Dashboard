import React from "react";
// import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { RiFileAddLine } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
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

    padding: ".375rem .75rem",
    lineHeight: "1.5",
    "&:hover": {
      backgroundColor: "transparent",

      color: "#57606B",
    },
  },
  icon: {
    marginRight: "0.4rem",
    fontSize: "1rem",
  },
}));

const AddButton = (props) => {
  const classes = useStyles();
  return (
    <>
      <button
        type="button"
        onClick={props.showAddField}
        className={classes.button}
      >
        <RiFileAddLine className={classes.icon} />
        {props.name}
      </button>
    </>
  );
};

export default AddButton;
