import React, { useState, useRef } from "react";
import * as p from "./Products.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";

import IMGcroper from "../../cropIMG/IMGcropper";
import Alert from "../../alertCOMP/alert";

const AddFiled = () => {
  const customAlert = useRef();

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      description: "",
      category: "",
      price: "",
      stock: "",
      discount: "",
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
      discount: Yup.string(),
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
      formData.append("title", values.title);
      formData.append("image", pic);
      formData.append("description", values.description);
      formData.append("category", values.category);
      formData.append("price", values.price);
      formData.append("stock", values.stock);
      formData.append("discount", values.discount);

      // formData.append("user_id",id)
      axios
        .post("http://localhost:4000/shopping/", formData)
        .then((res) => {
          console.log("Data inserted");
          console.log(res);
          customAlert.current.success("Product Successfully added");
          setCheckImage("");
          formik.resetForm();
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
      <p.AddMainDiv>
        <p.AddHeading>Add Product</p.AddHeading>

        <p.part>
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
        </p.part>
        <p.part>
          <p>Image</p>
          <div style={{ marginRight: "13.69rem" }}>
            <IMGcroper setPic={setPic} />
            <span style={{ color: "red" }}> {checkImage}</span>
          </div>
        </p.part>
        <p.part>
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
        </p.part>
        <p.part>
          <p>Category</p>

          <div>
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
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-selecl"
                    className="category"
                    label="Category"
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
              variant="outlined"
              error
              label={formik.errors.price}
              {...formik.getFieldProps("price")}
            />
          ) : (
            <TextField
              id="price"
              className="Price"
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
              error
              label={formik.errors.stock}
              {...formik.getFieldProps("stock")}
            />
          ) : (
            <TextField
              id="stock"
              className="stock"
              label="stock"
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
        <p.part>
          <Button
            className="addbutton"
            onClick={formik.handleSubmit}
            variant="outlined"
          >
            Add
          </Button>
        </p.part>
        <Alert ref={customAlert} />
      </p.AddMainDiv>
    </>
  );
};

export default AddFiled;
