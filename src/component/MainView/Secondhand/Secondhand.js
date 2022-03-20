import React from "react";
import * as o from "./Secondhand.styles";

import Heading from "./Heading";
import Body from "./Body";
const Secondhand = () => {
  return (
    <o.Root>
      <o.Container>
        <Heading />

        <Body />
      </o.Container>
    </o.Root>
  );
};

export default Secondhand;
