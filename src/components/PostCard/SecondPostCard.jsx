import React from "react";
import { Link } from "react-router-dom";


export default function SecondPostCard({ article }) {
  return (
    <div className="card " style={{width: "20rem", height: "100%" ,border:"none"}} >
        <img src={article?.urlToImage } className="card-img-top border-none" alt="..." />
        <div className="card-body d-flex flex-column justify-content-between  bg-black border-black border-none">
            <h5 className="card-title text-white">{article?.title || "Card title"}</h5>
            <p className="card-text text-white">{article?.description?.substring(0, 200) || "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}</p>
            <div >
              <Link to={article?.url || ("something went wrong")} className="btn btn-primary">Read More</Link>
            </div>
        </div>
    </div>
  );
}
