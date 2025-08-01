import React from "react";
import Copyright from './../Copyright/Copyright';

export default function Footer() {
  return (<>
      <div className="footer-top p-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-5">
            <div className="footer-item text-center ">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className="col-md-4 p-5">
            <div className="footer-item text-center">
              <h3>AROUND THE WEB</h3>
              <div className="social-icons d-flex justify-content-center gap-2">
                <span className="border rounded-circle border-2 d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-facebook-f"></i>
                </span>
                <span className="border rounded-circle border-2 d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span className="border rounded-circle border-2 d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
                <span className="border rounded-circle border-2 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-globe"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-5">
            <div className="footer-item text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className='footer-bot p-4'>
        <p className='text-center text-white m-0 p-0'>Copyright © Your Website 2021</p>
    </div>

    
    </>
  );
}
