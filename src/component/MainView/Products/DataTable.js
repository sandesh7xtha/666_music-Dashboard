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

export default function DataTable() {
  const classes = useStyle();
  const [shopProduct, setShopProduct] = useState([]);
  const getShopProductFroMDB = ()=>{
    axios
    .get("http://localhost:4000/shopping/")
    .then((res) => {
      console.log(res.data.data);
      setShopProduct(res.data.data);
     
      $("#shop").DataTable();
     
    })
    .catch((err) => {
      console.log(err);
      console.log("data insert fail");
      
    });

}

const deleteProduct =(shopProductID) =>{
  axios
  .delete("http://localhost:4000/shopping/DeleteProduct/"+shopProductID)
  .then((res) => {
    console.log("deleted");
    getShopProductFroMDB();

   
  })
  .catch((err) => {
    console.log(err);
    console.log("data insert fail");
    
  });  
 
}

  useEffect(() => {
    getShopProductFroMDB();   
  }, []);

useEffect(() => {
  $(document).ready(function () {
    // $("#example3").DataTable();
  });
});

  return (
    <TableContainer>
      
      <Table
        id="shop"
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
          
          {shopProduct.map((row, index) => (
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
                {index+1}
           
              </TableCell>
              <TableCell align="left" className={classes.tableRow}>
                {/* {index} */}
                {row.sp_id}
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
                <DeleteIcon deleteProduct={deleteProduct} id={row.sp_id}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
