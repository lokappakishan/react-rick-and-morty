import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import mypics from '../assets/logo.png';
import mainStyles from '../styles/Home.module.scss';
import headerStyles from '../styles/header.module.scss';


export default function Header(){
    return(
    <header className={`${headerStyles.mainHeader}`} >
    <div className={`${mainStyles.container} ${headerStyles.containerNav}`}>
            <div className="bar">
                <Link href={'/'}>
                    <Image src={mypics} alt="Image" className={headerStyles.logo}/>
                </Link>
            </div>
        <Nav />
    </div> {/* end container */}
    </header>);
}