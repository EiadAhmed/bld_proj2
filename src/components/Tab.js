import React from "react";
import style from "./Tab.css";
import Card from "./card.js";
function Tab(props) {
  let courses = props.courses.map((courseData) => {
    return (
      <Card
        imgSrc={courseData.imgSrc[Object.keys(courseData.imgSrc)[0]]}
        title={courseData.title}
        description={courseData.description}
        ratingValue={courseData.ratingValue}
        newPrice={courseData.newPrice}
        oldPrice={courseData.oldPrice}
      ></Card>
    );
  });
  return (
    <>
      <div className="Body">
        <h1 className="Header">{props.title}</h1>
        <p className="Paragraph">{props.desc}</p>
        <button className="exploreBtn">{"Explore Python"} </button>
        <div className="coursesList">
          {courses}
          <button className="nextBtn">
            <i className=" bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Tab;
