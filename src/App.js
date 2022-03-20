import MainView from "./component/MainView/MainView";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Navbar from "./component/Navbar/Navbar";
import React, { useEffect } from "react";
import MainNavbar from "./Blog/pages/Navbar/Navbar";
const Appstyle = styled.div``;

const MainPageContainor = styled.div``;

function App() {
  // useEffect(() => {
  //   document.title = "Ecommerce";
  // });
  return (
    <>
      {/* <MainPageContainor>
        <MainNavbar />
      </MainPageContainor> */}
      <Appstyle>
        <GlobalStyles />

        <Navbar />

        <MainView />
      </Appstyle>
    </>
  );
}

export default App;
