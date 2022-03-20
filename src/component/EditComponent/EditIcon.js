import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineEdit } from "react-icons/ai";

const useStyle = makeStyles((theme) => ({
  editIcon: {
    fontSize: "1.2rem",
    color: "#2653D4",
    marginLeft: "0.8rem",
    "&:hover": {
      backgroundColor: "#84818A",
      // padding: "0.1rem",
      borderRadius: "50%",
      color: "white",
    },
  },
}));

const EditIcon = () => {
  const classes = useStyle();

  return (
    <>
      <Tooltip title="Edit" TransitionComponent={Zoom} arrow>
        <Link>
          <AiOutlineEdit className={classes.editIcon} />
        </Link>
      </Tooltip>
    </>
  );
};

export default EditIcon;
