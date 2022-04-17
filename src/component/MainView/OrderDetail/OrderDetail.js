import React from "react";
import * as p from "./OrderDetail.css";
import DataTable from "./DataTable";
import Heading from "./Heading";

export const OrderDetail = () => {
  return (
    <p.Root>
      <p.Container>
        <Heading />
        <p.MainDiv>
          <p.TableDiv>
            <DataTable />
          </p.TableDiv>
        </p.MainDiv>
      </p.Container>
    </p.Root>
  );
};
export default OrderDetail;
