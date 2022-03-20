import React from "react";
import * as o from "./Secondhand.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
const AddFiled = () => {
  return (
    <>
      <o.AddMainDiv>
        <o.AddHeading>Add Product</o.AddHeading>
        <TextField
          id="outlined-basic"
          label="Category"
          variant="outlined"
          size="small"
          inputProps={{ style: { fontSize: 15 } }}
          InputLabelProps={{ style: { fontSize: 15 } }}
          style={{ width: "20rem", marginBottom: "0.8rem" }}
        />

        <Button
          variant="outlined"
          color="primary"
          style={{ width: "5rem", fontSize: "0.7rem" }}
        >
          Add
        </Button>
      </o.AddMainDiv>
    </>
  );
};

export default AddFiled;
