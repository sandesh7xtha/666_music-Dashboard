import React, { useState, useRef } from "react";
import * as p from "./EditProductPopUp.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import TextField from "@mui/material/TextField";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
// import EditIcon from "@mui/icons-material/Edit";
import EditIcon from "../../../EditComponent/EditIcon";
import { AiOutlineEdit } from "react-icons/ai";

import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import Alert from "../../../alertCOMP/alert";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";

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
      category: props.data.category,
      price: props.data.price,
      stock: props.data.stock,
      discount: props.data.discount,
    },
    validationSchema: Yup.object({
      title: Yup.string().min(5, "Must be 5 characters").required("Required"),
      description: Yup.string()
        .min(20, "Must be 20 characters")
        .required("Required"),
      category: Yup.string().required("Required"),

      price: Yup.string()
        .matches(/^[0-9\b]+$/, "number only")
        .required("Required"),
      stock: Yup.string().required("Required"),
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
      category: values.category,
      price: values.price,
      stock: values.stock,
      sp_id: props.data.sp_id,
    };

    axios
      .patch("http://localhost:4000/shopping/", data)
      .then((res) => {
        console.log("Data inserted");
        console.log(res);
        customAlert.current.success("Product Successfully Edited");
        // setCheckImage("");
        // formik.resetForm();
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
    // } else {
    //   setCheckImage("image required");
    //   customAlert.current.error("Image required");
    // }
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
          Product
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p.addSellForm>
              <p
                style={{
                  color: "#a8a8a8",
                }}
              >
                Edit Product Detail
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
              <p.part>
                <p>Category</p>

                <div style={{ width: "13.9rem" }}>
                  <FormControl fullWidth>
                    {formik.touched.category && formik.errors.category ? (
                      <>
                        <InputLabel
                          id="demo-simple-select-label"
                          style={{ color: "#D32F2F" }}
                        >
                          Required
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          error
                          className="category"
                          size="small"
                          label={formik.errors.category}
                          {...formik.getFieldProps("category")}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="Drum">Drum</MenuItem>
                          <MenuItem value="Guitar">Guitar</MenuItem>
                          <MenuItem value="Bass">Bass</MenuItem>
                          <MenuItem value="Keyboard">Keyboard</MenuItem>
                          <MenuItem value="Microphone">Microphone</MenuItem>
                          <MenuItem value="Accessories">Accessories</MenuItem>
                        </Select>
                      </>
                    ) : (
                      <>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-selecl"
                          className="category"
                          label="Category"
                          size="small"
                          {...formik.getFieldProps("category")}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="Drum">Drum</MenuItem>
                          <MenuItem value="Guitar">Guitar</MenuItem>
                          <MenuItem value="Bass">Bass</MenuItem>
                          <MenuItem value="Keyboard">Keyboard</MenuItem>
                          <MenuItem value="Microphone">Microphone</MenuItem>
                          <MenuItem value="Accessories">Accessories</MenuItem>
                        </Select>
                      </>
                    )}
                  </FormControl>
                </div>
              </p.part>
              <p.part>
                <p>Price</p>
                {formik.touched.price && formik.errors.price ? (
                  <TextField
                    id="price"
                    className="Price"
                    size="small"
                    variant="outlined"
                    error
                    label={formik.errors.price}
                    {...formik.getFieldProps("price")}
                  />
                ) : (
                  <TextField
                    id="price"
                    className="Price"
                    size="small"
                    label="(Rs) Price"
                    variant="outlined"
                    {...formik.getFieldProps("price")}
                  />
                )}
              </p.part>
              <p.part>
                <p>Stock</p>
                {formik.touched.stock && formik.errors.stock ? (
                  <TextField
                    id="stock"
                    className="stock"
                    variant="outlined"
                    size="small"
                    error
                    label={formik.errors.stock}
                    {...formik.getFieldProps("stock")}
                  />
                ) : (
                  <TextField
                    id="stock"
                    className="stock"
                    label="stock"
                    size="small"
                    variant="outlined"
                    {...formik.getFieldProps("stock")}
                  />
                )}
              </p.part>
              <p.part>
                <p>Discount</p>
                {formik.touched.discount && formik.errors.discount ? (
                  <TextField
                    id="discount"
                    className="discount"
                    variant="outlined"
                    error
                    label={formik.errors.discount}
                    {...formik.getFieldProps("discount")}
                  />
                ) : (
                  <TextField
                    id="discount"
                    className="discount"
                    label="discount"
                    variant="outlined"
                    {...formik.getFieldProps("discount")}
                  />
                )}
              </p.part>
              {/* <p.part>
                <Button
                  className="addbutton"
                  onClick={formik.handleSubmit}
                  variant="outlined"
                >
                  Add
                </Button>
              </p.part> */}
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
