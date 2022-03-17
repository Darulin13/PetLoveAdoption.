import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Foter = styled.footer`
    background-color:#ade8f4;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    img{
        padding-top:20px;
        width:4%;
        height:20%;
    }
    div{
        background-color:#00b4d8;
        width:100%;
        
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-evenly;
    }
    Header{

        width:100%;
        h1{
            display:none;
        }
    }

`
function Footer() {
    return (
        <Foter>
            <div>
                <img src="https://media.graphcms.com/OvukQhQPSt17pvD7tLGX" />
                <img src="https://img.icons8.com/material-outlined/344/facebook.png" />
                <img src="https://img.icons8.com/ios-glyphs/344/domain.png" />
            </div>
            <Header Home="Home" Sobre="Sobre" Adote="Adote" Seja="Seja voluntário">

            </Header>
        </Foter>
    )

}
export default Footer