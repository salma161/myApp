import React from "react";
import homeImg from "../assets/images/avataaars.svg";

export default function Home() {
  return (
    <div className="p-5 home-sec text-white">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={homeImg} alt="avatar" className="home-img mb-5" />

          <h1 className="fw-bolder mb-3">START FRAMEWORK</h1>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-white border border-1 border-white line mx-2"></div>
            <i className="fa-solid fa-star mx-2"></i>
            <div className="bg-white border border-1 border-white line mx-2"></div>
          </div>
          <p className="pb-5">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
}
