import React from "react"
import Home from "../pages"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({children}){
    return(
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}