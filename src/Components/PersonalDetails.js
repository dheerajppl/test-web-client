import React from 'react'
import axios from "axios";
import Logo1 from "../Asset/Images/Gp.png";
import Logo from "../Asset/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "../Asset/App.css";
import LoaderComponet from './LoderComponent'

export default function PersonalDetails() {
  axios.defaults.withCredentials = true;
  const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
      });
      const navigate = useNavigate();


      const handleSubmit = (e) => {
        e.preventDefault();

      };

      const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
          });
      };

      const buildHandle=()=>{
        setLoading(true)
        axios
        .post("http://localhost:3010/api/users", formData)
        .then((response) => {
          
          console.log(response);
          if(response.status === 200)
          {
            setLoading(false)
            navigate('/theme')
          }
          
          setResponseMessage("Data saved successfully");
        })
        .catch((error) => {
          setLoading(false)
          console.error(error);
          navigate('/')
          setResponseMessage("Error saving data");
        });
      }


  return (
    <div className="content">
    {loading ? (
      <LoaderComponet loading/>
      ):(" ")}
      <div className="container container-fluid">
        <div className="row justify-content-center outer">
          <div className="col-md-12 pt-4 ">
            <div className="col-md-12 pb-5 mb-5">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-2 ">
                  <p className="mb-0">
                    <img src={Logo1} alt="not found" className="img-fluid" />
                  </p>
                </div>
                <div className="col-md-8 ">
                  <p className="meet text-center mb-0">
                    Meet the creator: Jacob Levinrad
                  </p>
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                  {/* <button className="create">
                          <a href="/">Create</a>
                        </button> */}
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 position-relative">
                <p className="mb-0">
                  <img src={Logo} alt="not found" className="img-fluid" />
                </p>
                <p style={{ fontSize: "14px" }} className="mt-0 mb-0">
                  (ARTIFICIAL INTELLIGENCE)
                </p>
                <h3 className="heading mb-0">
                  <p
                    className="mb-0"
                    style={{
                      fontFamily: "DM Serif Display",
                      fontWeight: 600,
                      fontStyle: "italic",
                      color: "#fff",
                    }}
                  >
                    MEETS
                  </p>
                  <p className="head mb-0">ECOMMERCE</p>
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: 400,
                    color: "#fff",
                  }}
                >
                  Presenting our cutting-edge AI Accelerator, engineered to
                  effortlessly construct your fully functional Shopify Ecommerce
                  store within mere seconds.
                </p>
              </div>
              <div className="col-md-6">
                <form
                  className="mb-5 form-outer"
                  onSubmit={handleSubmit}
                  id="contactForm"
                  name="contactForm"
                >
                  <div className="row">
                    <div class="col-md-12">
                      <p class="info">Lets get started:</p>
                    </div>
                    <div className="col-md-12 form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="form-control input_container"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phonenumber"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 text-center">
                      <input
                        type="submit"
                        value="BUILD"
                        onClick={buildHandle}
                        className="btn btn-primary rounded-0 py-2 px-4 mt-3"
                      />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
                <div id="form-message-warning mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}
