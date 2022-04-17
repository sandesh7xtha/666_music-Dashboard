import React, { useState } from "react";
import * as p from "./OrderDetail.css";
import Button from "@material-ui/core/Button";
// import AddField from "./AddField";
import AddButton from "../../ButtonComponent/AddButton";

const Heading = () => {
  // const [show, setShow] = useState(false);
  // const showAddField = () => {
  //   setShow(!show);
  // };
  return (
    <>
      <p.HadingButtonMainDiv>
        <p.HeadingMianDiv>
          <p.Heading>Order Detail</p.Heading>
          <p.SubHeading>View Order Detail</p.SubHeading>
        </p.HeadingMianDiv>
        {/* <p.ButtonMainDiv>
          <Button variant="outlined" color="primary" onClick={showAddField}>
            Add Products
          </Button>
          <AddButton showAddField={showAddField} name="Product" />
        </p.ButtonMainDiv> */}
      </p.HadingButtonMainDiv>
      {/* {show ? <AddField /> : " "} */}
    </>
  );
};

export default Heading;
