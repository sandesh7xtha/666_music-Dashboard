import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import { FaBars } from "react-icons/fa";
import { Paper } from "@material-ui/core";
import * as n from "./Navbar.styles";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };
  return (
    <>
      <Paper>
        <n.TopNav click={click}>
          <n.TopContainer>
            <n.MenuIcon onClick={handleClick}>
              <FaBars />
            </n.MenuIcon>
            <TopNavbar />
          </n.TopContainer>
        </n.TopNav>
      </Paper>
      <Sidebar click={click} />
    </>
  );
};

export default Navbar;
