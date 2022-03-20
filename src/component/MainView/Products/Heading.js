import React, { useState } from "react";
import * as p from "./Products.styles";
import Button from "@material-ui/core/Button";
import AddField from "./AddField";
import AddButton from "../../ButtonComponent/AddButton";

const Heading = () => {
  const [show, setShow] = useState(false);
  const showAddField = () => {
    setShow(!show);
  };
  return (
    <>
      <p.HadingButtonMainDiv>
        <p.HeadingMianDiv>
          <p.Heading>Products</p.Heading>
          <p.SubHeading>View Products Detail</p.SubHeading>
        </p.HeadingMianDiv>
        <p.ButtonMainDiv>
          {/* <Button variant="outlined" color="primary" onClick={showAddField}>
            Add Products
          </Button> */}
          <AddButton showAddField={showAddField} name="Product" />
        </p.ButtonMainDiv>
      </p.HadingButtonMainDiv>
      {show ? <AddField /> : " "}
    </>
  );
};

export default Heading;
