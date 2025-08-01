import React from "react";

export default function Contact() {
  return (
    <div className="p-5 contact-sec">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div>
            <h2 className="fw-bolder fs-1 mt-5 text-center">
              CONTACT COMPONENT
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className=" border border-1  mx-2 port-line"></div>
              <i className="fa-solid fa-star mx-2"></i>
              <div className="border border-1  mx-2 port-line"></div>
            </div>
          </div>
        </div>
        <div className="form-sec w-50 m-auto mt-5">
          <input
            type="text"
            name="uname"
            placeholder="username"
            className="form-control mb-4 form-input"
          />
          <input
            type="text"
            name="uAge"
            placeholder="user age"
            className="form-control my-4 form-input"
          />
          <input
            type="email"
            name="uEmail"
            placeholder="user email"
            className="form-control my-4 form-input"
          />
            <input
            type="password"
            name="uPassword"
            placeholder="user password"
            className="form-control my-4 form-input"
          />
          <button className="btn btn-main px-3">send message</button>
        </div>
      </div>
    </div>
  );
}
