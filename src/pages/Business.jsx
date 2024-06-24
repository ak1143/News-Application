import React, { useState } from "react"
import NewsList from "./NewsList"

export default function Business(){

    return(
        <div style={{ paddingLeft: '150px', paddingRight: '150px'}}>
            <NewsList category="business" />
        </div>
    )
}