import React, { useState } from "react";
import * as c from "./News.styles";
import Button from "@material-ui/core/Button";
import AddNews from "./AddNews";
import AddButton from "../../ButtonComponent/AddButton";

const Heading = () => {
  const [show, setShow] = useState(false);
  const showAddField = () => {
    setShow(!show);
  };
  return (
    <>
      <c.HadingButtonMainDiv>
        <c.HeadingMianDiv>
          <c.Heading>News</c.Heading>
          <c.SubHeading>View News Detail</c.SubHeading>
        </c.HeadingMianDiv>
        <c.ButtonMainDiv>
          <AddButton showAddField={showAddField} name="Add New" />
        </c.ButtonMainDiv>
      </c.HadingButtonMainDiv>
      {show ? <AddNews /> : " "}
    </>
  );
};

export default Heading;
