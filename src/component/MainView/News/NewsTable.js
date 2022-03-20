import React from "react";
import * as c from "./News.styles";
import NewsDataTable from "./NewsDataTable";

const NewsTable = () => {
  return (
    <>
      <c.TableMainDiv>
        <c.SubTableDiv>
          <NewsDataTable />
        </c.SubTableDiv>
      </c.TableMainDiv>
    </>
  );
};

export default NewsTable;
