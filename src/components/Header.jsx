import React from 'react'
import styled from 'styled-components';
import { BsPenFill } from "react-icons/bs";
function Header() {
    return (
        <HeaderWrapper>
            <BsPenFill style={{ color: "#f6bd60", marginTop: "4px", fontSize: "35px", paddingRight: "10px" }} />
            <h2> Notes App</h2>
        </HeaderWrapper>
    )
}
const HeaderWrapper = styled.div`
height:60px;
padding:1rem;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
background-color:#84a59d;
display:flex;
align-items:center;
h2{
    font-family: 'Lobster', cursive;
    color:#f5cac3
}
`;
export default Header