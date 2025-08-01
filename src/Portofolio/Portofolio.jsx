import React, { useState } from "react";
import house from "../assets/images/port1.png";
import cake from "../assets/images/port2.png";
import circus from "../assets/images/port3.png";

let images = [house, cake, circus, house, cake, circus];

export default function Portofolio() {
  const [modal, setModal] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  function closeImage(e) {
    if (e.target.tagName !== "IMG") {
      setModal(false);
    }
  }

  return (
    <div className="p-5 port-sec">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div>
            <h2 className="fw-bolder fs-1 mt-5 text-center">
              PORTOFOLIO COMPONENT
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className=" border border-1  mx-2 port-line"></div>
              <i className="fa-solid fa-star mx-2"></i>
              <div className="border border-1  mx-2 port-line"></div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          {images.map((item, index) => (
            <div key={index} className="col-md-4">
              <div
                onClick={() => {
                  setModal(true), setCurrentImg(item);
                }}
                className="port-item position-relative"
              >
                <img src={item} alt="house picture" className=" rounded-3" />
                <div className="port-item-layer position-absolute top-0 bottom-0 start-0 end-0 rounded-3 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {modal ? (
          <div
            onClick={(e) => closeImage(e)}
            className="modal position-fixed d-flex justify-content-center align-items-center top-0 bottom-0 end-0 start-0 text-bg-info bg-opacity-25"
          >
            <img src={currentImg} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
