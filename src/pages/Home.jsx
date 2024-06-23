import React, { useState } from "react"
import FirstPostCard from "../components/PostCard/FirstPostCard"


export default function Home(){

    // const {title , setTitle} = useState('');
    // const {discription, setDiscription} = useState('');
    // const {imageUrl, setImageUrl } = useState('');

    return(
        <div style={{ paddingLeft: '150px', paddingRight: '150px'}}>
            <FirstPostCard />
        </div>
    )
}