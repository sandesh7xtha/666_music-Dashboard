import React from "react";
import * as n from "./Navbar.styles";

import { data } from "./NavbarMenuData";

const TopNavbar = () => {
  const navitem = data.map((navbaritem, index) => {
    return (
      <>
        <n.ItemLinks color={navbaritem.color} to={navbaritem.link} key={index}>
          {navbaritem.icon}
        </n.ItemLinks>
      </>
    );
  });
  return (
    <>
      <n.MenuItem>
        {navitem}
        <n.UserName>
          <p>PRAMILA kHADKA</p>
          <span>ADMIN PROFILE</span>
        </n.UserName>
      </n.MenuItem>
    </>
  );
};

export default TopNavbar;
