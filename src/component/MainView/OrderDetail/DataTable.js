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
import Switch from "@mui/material/Switch";
// import EditProduct from "./EditProductDetail/EditProductPopUp";
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

export default function DataTable() {
  const classes = useStyle();
  const [orderDetail, setOrderDetail] = useState([]);
  // console.log(shopProduct);

  const getHistoryFroMDB = () => {
    axios
      .get("http://localhost:4000/payment/")
      .then((res) => {
        console.log(res.data.data);
        setOrderDetail(res.data.data);

        $("#orderDetail").DataTable();
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  const deleteProduct = (shopProductID) => {
    // axios
    //   .delete("http://localhost:4000/shopping/DeleteProduct/" + shopProductID)
    //   .then((res) => {
    //     console.log("deleted");
    //     getShopProductFroMDB();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log("data insert fail");
    //   });
  };

  useEffect(() => {
    getHistoryFroMDB();
  }, []);

  useEffect(() => {
    $(document).ready(function () {
      // $("#example3").DataTable();
    });
  });

  const handleChange = (values1, values2) => {
    // const data = {
    //   visibility: values1.target.checked.toString(),
    //   sp_id: values2,
    // };
    // axios
    //   .patch("http://localhost:4000/shopping/publish", data)
    //   .then((res) => {
    //     console.log(res);
    //     // setShopProduct(res.data.data);`
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log("data insert fail");
    //   });
  };

  return (
    <TableContainer>
      <Table
        id="orderDetail"
        sx={{ minWidth: 300 }}
        style={{ paddingTop: "1rem", paddingBottom: "rem" }}
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableRow} align="left">
              SN
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Payment ID
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Image
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Title
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Order Detail
            </TableCell>
            <TableCell className={classes.tableRow} align="right">
              Date
            </TableCell>
            <TableCell className={classes.tableRow} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody stripedRows>
          {orderDetail.map((row, index) => (
            <TableRow
              key={index}
              style={
                index % 2
                  ? { backgroundColor: "#e0e0d1" }
                  : { backgroundColor: "white" }
              }
              //   className={index % 2 ? classes.stripColor : classes.stripNoColor}
              //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" className={classes.tableRow}>
                {index + 1}
              </TableCell>
              <TableCell align="left" className={classes.tableRow}>
                {/* {index} */}
                {row.payment_id}
              </TableCell>
              <TableCell align="left" className={classes.tableRow}>
                <img
                  className="img"
                  src={row.image}
                  style={{ maxWidth: "8rem" }}
                />
              </TableCell>

              <TableCell align="left" className={classes.tableRow}>
                <p>Title : {row.title}</p>
                <p>Product ID : {row.sp_id}</p>
              </TableCell>
              <TableCell align="left" className={classes.tableRow}>
                <p>Customer Name : {row.fullName}</p>
                <p>Address : {row.address}</p>
                <p>City : {row.city}</p>
                <p>Zip Code : {row.zip}</p>
                <p>Province : {row.province}</p>
                <p>Contact Number : {row.contactNumber}</p>
                <p>Quantity : {row.quantity}</p>
              </TableCell>
              <TableCell align="right" className={classes.tableRow}>
                {/* {row.visibility === "true" ? (
                  <Switch
                    size="small"
                    defaultChecked
                    onChange={(e) => {
                      handleChange(e, row.sp_id);
                    }}
                  />
                ) : (
                  <Switch
                    size="small"
                    onChange={(e) => {
                      handleChange(e, row.sp_id);
                    }}
                  />
                )} */}
                <p> {row.date}</p>
              </TableCell>
              <TableCell align="right">
                {/* <ViewIcon /> */}
                {/* <EditProduct data={row} /> */}
                {/* <DeleteIcon deleteProduct={deleteProduct} id={row.sp_id} /> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
