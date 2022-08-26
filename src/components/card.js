import React from "react";
import style from "./card.css";
function Card(props) {
  return (
    <>
      <article className={"card"}>
        <img
          className={"courseImage  card-img-top"}
          src={props.imgSrc}
          alt="Course"
        />
        <div className="card-body">
          <h3 className="courseTitle">{props.title}</h3>
          <p className="courseDescr">{props.desc}</p>
          <div className="rating">
            <span className="ratingVal">{props.ratingVal}</span>
            <span className=" fa-star checked fa-solid"> </span>
            <span className=" fa-solid checked  fa-star"> </span>
            <span className="checked fa fa-star"> </span>
            <span className="fa fa-star checked "></span>
            <span className="fa-solid fa-star-half-stroke checked"></span>
          </div>
          <div className="newPrice">{props.newPrice}</div>
          <s className="oldPrice">{props.oldPrice}</s>
        </div>
      </article>
    </>
  );
}

export default Card;
