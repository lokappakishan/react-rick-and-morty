import Link from "next/link";
import React from "react";

export default function Nav(){
    return(
    <nav>
        <ul>
            <li><Link href='/locations' >LOCATIONS</Link></li>    
            <li><Link href='/characters' >CHARACTERS</Link></li>
            <li><Link href='/episodes' >EPISODES</Link></li>
        </ul>
    </nav>);
}