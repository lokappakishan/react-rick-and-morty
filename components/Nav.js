import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import headerStyles from '../styles/header.module.scss';

export default function Nav(){

    const router = useRouter();
    const currentRoute = router.pathname;

    return(
    <nav className={headerStyles.navbar}>
        <ul>
            <li><Link href='/' className={currentRoute === '/' ? headerStyles.active : headerStyles.nonActive}>Home</Link></li>  
            <li><Link href='/locations' className={currentRoute === '/characters' ? headerStyles.active : headerStyles.nonActive} >Characters</Link></li>    
            <li><Link href='/characters' className={currentRoute === '/locations' ? headerStyles.active : headerStyles.nonActive} >Locations</Link></li>
            <li><Link href='/episodes' className={currentRoute === '/episodes' ? headerStyles.active :headerStyles.nonActive}>Episodes</Link></li>
        </ul>
    </nav>);
}