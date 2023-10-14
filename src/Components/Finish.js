import React from 'react'
import Logo1 from "../Asset/Images/Gp.png";
import Logo from "../Asset/Images/Logo.png";
import Uns from "../Asset/Images/uns.png";
import "../Asset/App.css";
import { useNavigate } from "react-router-dom";

export default function Finish() {
  return (
    <div className="content  container-fluid">
      <div className="container  container-fluid">
        <div className="row justify-content-center outer1 pb-0">
          <div className="col-md-12 pt-4">
            <div className="col-md-12 pb-5 mb-5">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-2">
                  <p className="mb-0">
                    <img src={Logo1} alt="not found" className="img-fluid" />
                  </p>
                </div>
                <div className="col-md-8">
                  <p className="meet text-center mb-0">
                    Meet the creator: Jacob Levinrad
                  </p>
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                  {/* <button className="create">
                          <a href="#">Create</a>
                        </button> */}
                </div>
              </div>
            </div>
            <h1 className="text-white text-center">You are all set...</h1>
            <p className="text-white text-center">
              Now You Can check Your Store On Shopify
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
