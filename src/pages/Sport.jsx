import React from "react";
import NewsList from "./NewsList"

export default function Sport(){

    return(
        <div style={{ paddingLeft: '150px', paddingRight: '150px'}}>
            <NewsList category="sports" />
        </div>
    )
}