import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@mui/material/Paper";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import ViewIcon from "../../ViewComponent/ViewIcon";
import EditIcon from "../../EditComponent/EditIcon";
import DeleteIcon from "../../DeleteComponent/DeleteIcon";
import axios from "axios";


const useStyle = makeStyles((theme) => ({
  tableRow: {
    whiteSpace: "nowrap",
  },
  stripColor: {
    backgroundColor: "red",
  },
  stripNoColor: {
    backgroundColor: "white",
  },
}));

export default function ReportDataTable() {
  const classes = useStyle();
  const [report, setReport] = useState([]);

  const getReportFroMDB = () => {
    axios
      .get("http://localhost:4000/report/")
      .then((res) => {
        console.log(res.data.data);
        setReport(res.data.data);
        // $(document).ready(function () {
        //   $("#example3").DataTable();
        // });
        $("#report").DataTable();
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  const deleteReport = (secondhandID) => {
    axios
      .delete(
        "http://localhost:4000/report/DeleteReport/" + secondhandID
      )
      .then((res) => {
        console.log("deleted");
        getReportFroMDB();
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  useEffect(() => {
    getReportFroMDB();
  }, []);

  useEffect(() => {
    $(document).ready(function () {
      // $("#example3").DataTable();
    });
  });

  return (
    

    <TableContainer>
      <Table
        id="report"
        sx={{ minWidth: 300 }}
        style={{ paddingTop: "1rem", paddingBottom: "rem" }}
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableRow} align="left">
              SN
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Product ID
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              user ID
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Message
            </TableCell>

            <TableCell className={classes.tableRow} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody stripedRows>
          {report.map((row, index) => (
            <TableRow
              key={index}
              style={
                index % 2
                  ? { backgroundColor: "#e0e0d1" }
                  : { backgroundColor: "white" }
              }

            >
              <TableCell align="left" className={classes.tableRow}>
                {index + 1}
              </TableCell>
              <TableCell align="left" className={classes.tableRow}>
                {row.shp_id}
              </TableCell>
              <TableCell align="left" className={classes.tableRow}>
                {row.user_id}
              </TableCell>

              <TableCell align="left" className={classes.tableRow}>
                {row.message}
              </TableCell>

              <TableCell align="right">
                <ViewIcon />
                <EditIcon />
                <DeleteIcon deleteProduct={deleteReport} id={row.shp_id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
