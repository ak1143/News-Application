import React, { useState } from "react"
import NewsList from "./NewsList"


export default function Home(){

    return(
        <div style={{ paddingLeft: '150px', paddingRight: '150px'}}>
            <NewsList category="general" />
        </div>
    )
}