import React, { useState } from "react";
import * as c from "./Advertisement.styles";
import Button from "@material-ui/core/Button";
import AdvertisementAdd from "./AdvertisementAdd";
import AddButton from "../../ButtonComponent/AddButton";
const CategoryHeding = () => {
  const [show, setShow] = useState(false);
  const showAddField = () => {
    setShow(!show);
  };
  return (
    <>
      <c.HadingButtonMainDiv>
        <c.HeadingMianDiv>
          <c.Heading>Advertisement</c.Heading>
          <c.SubHeading>View Advertisement Detail</c.SubHeading>
        </c.HeadingMianDiv>
        <c.ButtonMainDiv>
          {/* <Button variant="outlined" color="primary" >
            Add Category
          </Button> */}
          <AddButton showAddField={showAddField} name="Add Advertisement" />
        </c.ButtonMainDiv>
      </c.HadingButtonMainDiv>
      {show ? <AdvertisementAdd /> : " "}
    </>
  );
};

export default CategoryHeding;
