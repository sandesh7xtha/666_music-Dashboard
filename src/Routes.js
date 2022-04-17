import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./component/MainView/Dashboard/Dashboard";
import Advertisement from "./component/MainView/Advertisement/Advertisement";
import Products from "./component/MainView/Products/Products";
import OrderDetail from "./component/MainView/OrderDetail/OrderDetail";
import Contacts from "./component/MainView/Contacts/Contacts";
import News from "./component/MainView/News/News";
import Secondhand from "./component/MainView/Secondhand/Secondhand";
import Navbar from "./component/Navbar/Navbar";

export const Routes = () => {
  return (
    <Switch>
      {/* <Navbar /> */}
      <Route exact path="/admin" component={Dashboard} />
      {/* <Route path="/Navbar" component={Navbar} /> */}
      <Route path="/admin/advertisement" component={Advertisement} />
      <Route path="/admin/products" component={Products} />
      <Route path="/admin/OrderDetail" component={OrderDetail} />
      <Route path="/admin/contacts" component={Contacts} />
      <Route path="/admin/news" component={News} />
      <Route path="/admin/secondhand" component={Secondhand} />
    </Switch>
  );
};
export default Routes;
