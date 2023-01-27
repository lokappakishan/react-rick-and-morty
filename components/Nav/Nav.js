import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import  navStyles from "./nav.module.scss";

export default function Nav(){

    const router = useRouter();
    const currentRoute = router.pathname;

    return(
    <nav>
        <ul>
            <li>
                <Link href='/' className={currentRoute === '/' ? navStyles.active : navStyles.nonActive}>
                    Home</Link>
                </li>  
            <li>
                <Link href='/characters' className={currentRoute === '/characters' ? navStyles.active : navStyles.nonActive} >
                    Characters
                </Link>
            </li>    
            <li>
                <Link href='/locations' className={currentRoute === '/locations' ? navStyles.active : navStyles.nonActive} >
                    Locations
                </Link>
            </li>
            <li>
                <Link href='/episodes' className={currentRoute === '/episodes' ? navStyles.active :navStyles.nonActive}>
                    Episodes
                </Link>
            </li>
        </ul>
    </nav>);
}