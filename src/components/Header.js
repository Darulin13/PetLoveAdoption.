import React from "react";
import styled from "styled-components";

const Container = styled.header`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    height:10vh;
     background-color:#00b4d8;
    
    ul{
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        width:40%;

        align-items:center;
       
    }
    h1{
        width:40%;
        color:#caf0f8;

    }
    li{
        list-style:none;
        color:#caf0f8;
    }
    li:hover{
        color:#03045e;
    }
    `;

const Header = ({Home,Sobre,Adote,Seja})=> {
    return (
        <Container>
            <h1>Amigão</h1>
            <ul>
                <li>{Home}</li>
                <li>{Sobre}</li>
                <li>{Adote}</li>
                <li>{Seja}</li>
            </ul>
        </Container>
    )
}
export default Header