import React from "react";

export default function About() {
  return (
    <div className="p-5 text-white about-sec">
      <div className="container p-5">
        <div className="d-flex flex-column p-5 align-items-center justify-content-center">
          <h2 className="fw-bolder fs-1 mt-5">ABOUT COMPONENT</h2>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-white border border-1 border-white line mx-2"></div>
            <i className="fa-solid fa-star mx-2"></i>
            <div className="bg-white border border-1 border-white line mx-2"></div>
          </div>
          <div className="row g-3 py-2 mb-5">
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
