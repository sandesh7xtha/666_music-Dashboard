import React, { useState } from "react";
import * as s from "./Sidebar.styles";
import { menuItems } from "./SidebarMenuData";
import { Link } from "react-router-dom";

const Sidebar = ({ isItemSelected, click }) => {
  const [selected, setSelected] = useState(menuItems[0].name);
  const handleMenuItemClick = (name) => {
    setSelected(name);
  };
  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;
    return (
      <Link to={item.to} style={{ textDecoration: "none", color: "#fff" }}>
        <s.MenuItem
          key={index}
          isItemSelected={isItemSelected}
          onClick={() => handleMenuItemClick(item.name)}
        >
          <s.Icon>{item.icon}</s.Icon>
          {item.name}
        </s.MenuItem>
      </Link>
    );
  });
  return (
    <div>
      <s.SidebarContainer click={click}>
        <s.SidebarHeader>666 MUSIC</s.SidebarHeader>
        <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      </s.SidebarContainer>
    </div>
  );
};

export default Sidebar;
