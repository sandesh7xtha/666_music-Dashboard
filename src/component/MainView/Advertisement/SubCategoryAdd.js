import React from "react";
import * as c from ".//Advertisement.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";

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

const CategoryAdd = () => {
  return (
    <>
      <c.AddCategoryMainDiv>
        <c.AddCategoryHeading>Sub Category</c.AddCategoryHeading>
        <FormControl variant="filled" margin="dense">
          {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<BootstrapInput />}
            style={{ marginBottom: "1rem", width: "20rem" }}
          >
            <MenuItem value="">
              <em>Category</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <TextField
            id="outlined-basic"
            label="Sub Category"
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            style={{ width: "20rem", marginBottom: "1rem" }}
          />

          <Button
            variant="outlined"
            color="primary"
            style={{ width: "5rem", fontSize: "0.7rem" }}
          >
            Add
          </Button>
        </FormControl>
      </c.AddCategoryMainDiv>
    </>
  );
};

export default CategoryAdd;
