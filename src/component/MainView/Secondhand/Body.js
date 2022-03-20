import React from "react";
import * as o from "./Secondhand.styles";
import DataTable from "./DataTable";
import ReportDataTable from "./reportDataTable";

const Body = () => {
  return (
    <>
      <o.MainDiv>
        <o.TableDiv>
          <DataTable />
        </o.TableDiv>
     
   
      </o.MainDiv>
      <>
      <br/>
      <o.HadingButtonMainDiv>
        <o.HeadingMianDiv>
          <o.Heading>Report</o.Heading>
          <o.SubHeading>View Report Detail</o.SubHeading>
        </o.HeadingMianDiv>

      </o.HadingButtonMainDiv>
      
    </>
      <o.MainDiv>
        <o.TableDiv>
        <ReportDataTable />

        </o.TableDiv>
     
   
      </o.MainDiv>
    </>
  );
};

export default Body;
