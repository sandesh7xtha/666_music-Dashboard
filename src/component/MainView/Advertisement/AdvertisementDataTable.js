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

import DeleteIcon from "../../DeleteComponent/DeleteIcon";
import EditIcon from "../../EditComponent/EditIcon";
import ViewIcon from "../../ViewComponent/ViewIcon";
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

export default function AdvertisementDataTable() {
  const classes = useStyle();
  const refreshPage = ()=>{
    window.location.reload();
 }
  const [advertisements, setadvertisements] = useState([]);

  const getsetAdvertisementsFromDB = ()=>{
    axios
    .get("http://localhost:4000/advertisements/")
    .then((res) => {
      console.log(res.data.data);
      setadvertisements(res.data.data);
      $("#AdvertisementTable").DataTable();
     
    })
    .catch((err) => {
      console.log(err);
      console.log("data insert fail");
      
    });

}

const deleteProduct =(advID) =>{
  axios
  .delete("http://localhost:4000/advertisements/DeleteProduct/"+advID)
  .then((res) => {
    console.log("deleted");
    getsetAdvertisementsFromDB();

   
  })
  .catch((err) => {
    console.log(err);
    console.log("data insert fail");
    
  });  
 
}

useEffect(() => {
  getsetAdvertisementsFromDB();
  
 
}, []);



useEffect(() => {
  $(document).ready(function () {
    // $("#example2").DataTable();
  });
});


  return (
    <TableContainer>
      <Table
        id="AdvertisementTable"
        sx={{ minWidth: 300 }}
        style={{ paddingTop: "1rem", paddingBottom: "rem" }}
      >
        <TableHead>
          <TableRow>
          <TableCell className={classes.tableRow} align="left">
              SN
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              News ID
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Image
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Title
            </TableCell>
            <TableCell className={classes.tableRow} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody stripedRows>
          {advertisements.map((row, index) => (
            <TableRow
              key={row.name}
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
                {row.adv_id}
              </TableCell>
              <TableCell align="left" className={classes.tableRow}>
              <img className="img" src={row.image} style={{  maxWidth: "8rem" ,}}/>
              </TableCell>              
              <TableCell align="left" className={classes.tableRow}>
                {row.title}
              </TableCell>

              <TableCell align="right">
                <ViewIcon />
                <EditIcon />
                <DeleteIcon  deleteProduct={deleteProduct} id={row.adv_id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
