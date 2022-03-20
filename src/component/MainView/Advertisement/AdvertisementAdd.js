import React, { useState } from "react";
import * as c from "./Advertisement.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";

import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
const AdvertisementAdd = () => {

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string()
        .min(10, "Must be 20 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log("hello");
      sendToDatabase(values);
    },
  });

  const [pic, setPic] = useState(null);
  const fileSelectedHandler = (event) => {
    setPic(event.target.files[0]);
  };

  const [checkImage, setCheckImage] = useState("");
  const sendToDatabase = (values) => {
    if (pic != null) {
      var formData = new FormData();
      formData.append("image", pic);
      formData.append("title", values.title);
      formData.append("description", values.description);

      // formData.append("user_id",id)
      axios
        .post("http://localhost:4000/advertisements/", formData)
        .then((res) => {
          console.log("Data inserted");
          console.log(res);
          alert("Hello! I am an alert box!!");
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
        <c.AddCategoryHeading>Add Category</c.AddCategoryHeading>
        
        <FormControl variant="filled" margin="dense">
          <c.part>
            <p>Title</p>
            {formik.touched.title && formik.errors.title ? (
              <TextField
                id="title"
                className="title"
                label="Title"
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
            <div style={{ marginRight: "18rem" }}>
              <input
                onChange={fileSelectedHandler}
                multiple
                type="file"
                required
              />
              {""}
              <span style={{ color: "red" }}> {checkImage}</span>
            </div>
          </c.part>
          <c.part>
            <p>Description</p>
            {formik.touched.description && formik.errors.description ? (
              <TextField
                id="description"
                className="Description"
                label="Description"
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

      </c.AddCategoryMainDiv>
    </>
  );
};

export default AdvertisementAdd;
