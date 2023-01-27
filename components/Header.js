import Image from "next/image";
import Link from "next/link";
import React from "react";
import mypics from '../assets/logo.png';
import Nav from "./Nav/Nav";



export default function Header(){
    return(
    <header>
    <div>
            <div>
                <Link href={'/'}>
                    <Image src={mypics} alt="Image"/>
                </Link>
            </div>
        <Nav />
    </div> {/* end container */}
    </header>);
}