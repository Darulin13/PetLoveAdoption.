import React,{Component} from "react";
import styledComponents from "styled-components";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
class App extends Component{
  render(){
    return(
      <>
      <GlobalStyle/>
        <Header Home="Home"Sobre="Sobre"Adote="Adote"Seja="Seja voluntário"/>
        <Main/>
        <Footer Home="Home"Sobre="Sobre"Adote="Adote"Seja="Seja voluntário"/>
      </>
    )
    }
}
export default App

