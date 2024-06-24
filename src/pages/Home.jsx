import React, { useState } from "react"
import NewsList from "./NewsList"


export default function Home(){

    // const {title , setTitle} = useState('');
    // const {discription, setDiscription} = useState('');
    // const {imageUrl, setImageUrl } = useState('');

    return(
        <div style={{ paddingLeft: '150px', paddingRight: '150px'}}>
            <NewsList category="cricket" />
        </div>
    )
}