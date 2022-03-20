import React from "react";
import * as c from "./Advertisement.styles";
import AdvertisementDataTable from "./AdvertisementDataTable";
import SubCategoryDataTable from "./SubCategoryDataTable";

const CategoryTable = () => {
  return (
    <>
      <c.CategoryTableMainDiv>
        <c.CategoryTableDiv>
          <AdvertisementDataTable />
        </c.CategoryTableDiv>
        {/* <c.SubCategoryTableDiv>
          <SubCategoryDataTable />
        </c.SubCategoryTableDiv> */}
      </c.CategoryTableMainDiv>
    </>
  );
};

export default CategoryTable;
