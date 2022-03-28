import React, { useRef, useState } from "react";
import * as c from "./News.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import IMGcroper from "../../cropIMG/IMGcropper";
import Alert from "../../alertCOMP/alert";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

const AddNews = () => {
  const customAlert = useRef();

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string()
        .min(20, "Must be 20 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log("hello");
      sendToDatabase(values);
    },
  });

  const [pic, setPic] = useState(null);
  // const fileSelectedHandler = (event) => {
  //   setPic(event.target.files[0]);
  // };

  const [checkImage, setCheckImage] = useState("");
  const sendToDatabase = (values) => {
    if (pic != null) {
      var formData = new FormData();
      formData.append("image", pic);
      formData.append("title", values.title);
      formData.append("description", values.description);

      // formData.append("user_id",id)
      axios
        .post("http://localhost:4000/news/", formData)
        .then((res) => {
          console.log("Data inserted");
          console.log(res);
          customAlert.current.success("News Successfully added");
          setCheckImage("");

          formik.resetForm();
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
          console.log("data insert fail");
        });
    } else {
      setCheckImage("image required");
    }
  };

  return (
    <>
      <c.AddCategoryMainDiv>
        <c.AddCategoryHeading>Add News</c.AddCategoryHeading>
        <FormControl variant="filled" margin="dense">
          <c.part>
            <p>Title</p>
            {formik.touched.title && formik.errors.title ? (
              <TextField
                id="title"
                className="title"
                variant="outlined"
                error
                label={formik.errors.title}
                {...formik.getFieldProps("title")}
              />
            ) : (
              <TextField
                id="title"
                className="title"
                label="Title"
                variant="outlined"
                {...formik.getFieldProps("title")}
              />
            )}
          </c.part>
          <c.part>
            <p>Image</p>
            <div style={{ marginRight: "13.7rem" }}>
            <IMGcroper setPic={setPic} />
            <span style={{ color: "red" }}> {checkImage}</span>
            </div>
          </c.part>
          <c.part>
            <p>Description</p>
            {formik.touched.description && formik.errors.description ? (
              <TextField
                id="description"
                className="Description"
                multiline
                rows={5}
                variant="outlined"
                error
                label={formik.errors.description}
                {...formik.getFieldProps("description")}
              />
            ) : (
              <TextField
                id="description"
                className="Description"
                label="Description"
                multiline
                rows={5}
                variant="outlined"
                {...formik.getFieldProps("description")}
              />
            )}
          </c.part>
          <c.part>
            <Button
              className="addbutton"
              onClick={formik.handleSubmit}
              variant="outlined"
            >
              Add
            </Button>
          </c.part>
        </FormControl>
        <Alert ref={customAlert} />

      </c.AddCategoryMainDiv>
    </>
  );
};

export default AddNews;
