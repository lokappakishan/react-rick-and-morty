import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Image from "next/image";
import mypics from '../assets/logo.png'



export default function Header(){
    return(
    <header>
        <div className="bar">
            <Link href={'/'}>
                <Image src={mypics} alt="Image" width="350px" height="300px" />
            </Link>
        </div>
        <Nav />
    </header>);
}