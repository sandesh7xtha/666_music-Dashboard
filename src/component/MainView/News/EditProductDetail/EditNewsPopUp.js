import React, { useState, useRef } from "react";
import * as p from "./EditNewsPopUp.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import TextField from "@mui/material/TextField";
import EditIcon from "../../../EditComponent/EditIcon";

import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import Alert from "../../../alertCOMP/alert";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const customAlert = useRef();

  const formik = useFormik({
    initialValues: {
      title: props.data.title,
      description: props.data.description,
    },
    validationSchema: Yup.object({
      title: Yup.string().min(5, "Must be 5 characters").required("Required"),
      description: Yup.string()
        .min(20, "Must be 20 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log("hello");
      sendToDatabase(values);
    },
  });

  const sendToDatabase = (values) => {
    // if (pic != null) {
    // var formData = new FormData();
    // formData.append("title", values.title);
    // formData.append("description", values.description);
    // formData.append("category", values.category);
    // formData.append("price", values.price);
    // formData.append("used_duration", values.usedDuration);

    // formData.append("contact_number", values.contactNumber);
    // formData.append("email", values.email);
    // formData.append("location", values.location);
    // formData.append("user_id", id);

    const data = {
      title: values.title,
      description: values.description,
      new_id: props.data.new_id,
    };

    axios
      .patch("http://localhost:4000/news/", data)
      .then((res) => {
        console.log("Data inserted");
        console.log(res);
        customAlert.current.success("Product Successfully Edited");
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  return (
    <div>
      <EditIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          News
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p.addSellForm>
              <p
                style={{
                  color: "#a8a8a8",
                }}
              >
                Edit News Detail
              </p>
              <p.part>
                <p>Title</p>
                {formik.touched.title && formik.errors.title ? (
                  <TextField
                    id="title"
                    className="title"
                    variant="outlined"
                    error
                    size="small"
                    label={formik.errors.title}
                    {...formik.getFieldProps("title")}
                  />
                ) : (
                  <TextField
                    id="title"
                    className="title"
                    label="Title"
                    variant="outlined"
                    size="small"
                    {...formik.getFieldProps("title")}
                  />
                )}
              </p.part>
              {/* <p.part>
          <p>Image</p>
          <div style={{ marginRight: "13.69rem" }}>
            <IMGcroper setPic={setPic} />
            <span style={{ color: "red" }}> {checkImage}</span>
          </div>
        </p.part> */}
              <p.part>
                <p>Description</p>
                <div style={{ width: "13.9rem" }}>
                  {formik.touched.description && formik.errors.description ? (
                    <TextField
                      id="description"
                      className="Description"
                      multiline
                      rows={5}
                      size="small"
                      variant="outlined"
                      error
                      fullWidth
                      label={formik.errors.description}
                      {...formik.getFieldProps("description")}
                    />
                  ) : (
                    <TextField
                      id="description"
                      className="Description"
                      label="Description"
                      multiline
                      size="small"
                      rows={5}
                      fullWidth
                      variant="outlined"
                      {...formik.getFieldProps("description")}
                    />
                  )}
                </div>
              </p.part>

              <Alert ref={customAlert} />
            </p.addSellForm>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={formik.handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
