import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`

    ul{
        border: 1px solid magenta;
        display: flex;
        justify-content: center;
        
    }

    li{
        border: 2px dotted orange;
        list-style: none;
        margin: 0 1em;
    }

    a{
        color: white;
        text-decoration: none;
    }

`;

export default function Nav(){
    return(
    <Navbar>
        <ul>
            <li><Link href='/locations' >LOCATIONS</Link></li>    
            <li><Link href='/characters' >CHARACTERS</Link></li>
            <li><Link href='/episodes' >EPISODES</Link></li>
        </ul>
    </Navbar>);
}