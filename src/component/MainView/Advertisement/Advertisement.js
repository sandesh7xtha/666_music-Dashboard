import React from "react";
import * as c from "./Advertisement.styles";
import AdvertisementAdd from "./AdvertisementAdd";
import Heading from "./Heading";
import AdvertisementTable from "./AdvertisementTable";
export const advertisement = () => {
  return (
    <c.Root>
      <c.Container>
        <Heading />
        {/* <CategoryAdd /> */}
        <AdvertisementTable />
      </c.Container>
    </c.Root>
  );
};
export default advertisement;
