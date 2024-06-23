import React from "react";
import { useNavigate } from "react-router-dom";

const FirstPostCard =  ({article})=> {

  const navigate = useNavigate();

  const handleButtonClick = async() =>{
    console.log("on button click", article?.url);
    navigate("/newspage");
  }

  return (  
    <div className="card my-4" style={{ width: "65%" }}>
      <img
        className="card-img-top"
        src={article?.urlToImage }
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{article?.title}</h5>
        <p className="card-text">
          {article?.description?.substring(0, 100)}
        </p>
        <a onClick={handleButtonClick} className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
}

export default FirstPostCard;
