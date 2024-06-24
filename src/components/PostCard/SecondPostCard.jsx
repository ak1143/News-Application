import React from "react";
import oops from "../../Images/OOPs.webp"

export default function SecondPostCard({ article }) {
  return (
    <div className="card" style={{width: "18rem" }} >
        <img src={article?.urlToImage || oops} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{article?.title || "Card title"}</h5>
            <p className="card-text">{article?.description || "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}</p>
            <p className="card-text">
              <small className="text-muted">Last updated {article?.publishedAt || "3 mins ago"}</small>
            </p>
            <a href="/" className="btn btn-primary">Read More</a>
        </div>
    </div>
  );
}
