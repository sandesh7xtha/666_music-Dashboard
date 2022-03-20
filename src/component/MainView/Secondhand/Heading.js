import React, { useState } from "react";
import * as o from "./Secondhand.styles";
import Button from "@material-ui/core/Button";
import AddField from "./AddField";

const Heading = () => {

  return (
    <>
      <o.HadingButtonMainDiv>
        <o.HeadingMianDiv>
          <o.Heading>Secondhand Product</o.Heading>
          <o.SubHeading>View Secondhand Product Detail</o.SubHeading>
        </o.HeadingMianDiv>

      </o.HadingButtonMainDiv>
      
    </>
  );
};

export default Heading;
