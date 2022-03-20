import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
padding:0;
font-family:'Roboto Condensed', sans-serif;


::-webkit-scrollbar {
    /* display: none; */
    width: 8px;
   
    
  }
  ::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 2px rgb(151, 174, 250); */
    border-radius: 10px;
   
   
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #aaaaaa;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

}


`;

export default GlobalStyles;
