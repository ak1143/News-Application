import React from "react";
import { useNavigate } from "react-router-dom";
import OOPS from "../../Images/oop.webp"

const FirstPostCard =  ({article})=> {

  const navigate = useNavigate();

  const handleButtonClick = async() =>{
    console.log("on button click", article?.url);
    navigate("/");
  }

  return (  
    <div className="card my-4 border-black" style={{ width: "65%" }}>
      <img
        className="card-img-top shadow-lg"
        src={article?.urlToImage || OOPS}
        alt="Card image cap"
        style={{ height: "350px",
          boxShadow: '0 4px 8px rgba(0, 0, 0, 1)'
         }}
      />
      <div className="card-body bg-black text-white">
        <h5 className="card-title">{article?.title}</h5>
        <p className="card-text bg-blue">
          {article?.description?.substring(0, 100)}
        </p>
        <a onClick={handleButtonClick} className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
}

export default FirstPostCard;
