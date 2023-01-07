import React from "react"
import Home from "../pages"
import Header from "./Header"

export default function Page({children}){
    return(
        <div>
            <Header />
            <>{children}</>
        </div>
    )
}