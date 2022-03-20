import React from "react";
import * as p from "./Products.styles";
import DataTable from "./DataTable";

const Body = () => {
  return (
    <>
      <p.MainDiv>
        <p.TableDiv>
          <DataTable />
        </p.TableDiv>
      </p.MainDiv>
    </>
  );
};

export default Body;
