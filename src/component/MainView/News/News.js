import React from "react";
import * as c from "./News.styles";
import Heading from "./Heading";
import NewsTable from "./NewsTable";
const News = () => {

  

  return (
    <c.Root>
      <c.Container>
        <Heading />
        <NewsTable />
      </c.Container>
    </c.Root>
  );
};

export default News;
