import React from 'react'
import axios from "axios";
import Uns from "../Asset/Images/uns.png";
import Logo1 from "../Asset/Images/Gp.png";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
import "../Asset/App.css";
import LoaderComponet from './LoderComponent'
export default function Theme() {
  axios.defaults.withCredentials = true;
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        selectedItem: "",   
      });
      useEffect(()=>{
        (async()=>{
          setLoading(true);
          const response = await axios.get(`http://localhost:3010/dashboard`);
          console.log(response);
                  if(response.data ==="Success")
                  {
                    setLoading(false);
                    navigate('/theme')
                    console.log("Successded OK")
                  }
                  else{
                    setLoading(false);
                    navigate('/')
                  }
        })();
      
        },[])

      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
        .post("http://localhost:3010/api/themes", formData)
        .then((response) => {
          console.log(response);
          
          if(response.status === 200)
          {
            setLoading(false);
            navigate('/product-import')
          }
          
          setResponseMessage("Data saved successfully");
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
          navigate('/theme')
          setResponseMessage("Error saving data");
        });
      };
      const handleItemClick = (item) => {
        setFormData({ ...formData, selectedItem: item });
        
      };

  return (
    <div className="content">
    {loading ? (
      <LoaderComponet loading/>
      ):(" ")}
      <div className="container">
        <div className="row justify-content-center outer pb-0">
          <div className="col-md-12 pt-4">
            <div className="col-md-12 pb-4 mb-4">
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
                            <a href="/">Create</a>
                          </button> */}
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-8">
                  <p className="choose">Select a Niche:</p>
                </div>
                <div className="col-md-4 text-left">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Next
                  </button>
                </div>
              </div>
              <div className="row pt-3 pb-5">
                <div className="col-md-12">
                  <div className="box-outer pb-5 ">
                    <ul>
                      <li
                        onClick={() => handleItemClick("Tech")}
                        style={{
                          border:
                            formData.selectedItem === "Tech"
                              ? "1px solid #fff"
                              : "none",
                          cursor: "pointer",
                        }}
                      >
                        <p>
                          <img
                            src={Uns}
                            alt="not found"
                            className="img-fluid"
                          />
                        </p>
                        <p className="tech">Technology</p>
                      </li>

                      <li
                        onClick={() => handleItemClick("Fitness")}
                        style={{
                          border:
                            formData.selectedItem === "Fitness"
                              ? "1px solid #fff"
                              : "none",
                          cursor: "pointer",
                        }}
                      >
                        <p>
                          <img
                            src={Uns}
                            alt="not found"
                            className="img-fluid"
                          />
                        </p>
                        <p className="tech">Sports / Gym</p>
                      </li>

                      <li
                        onClick={() => handleItemClick("Beauty")}
                        style={{
                          border:
                            formData.selectedItem === "Beauty"
                              ? "1px solid #fff"
                              : "none",
                          cursor: "pointer",
                        }}
                      >
                        <p>
                          <img
                            src={Uns}
                            alt="not found"
                            className="img-fluid"
                          />
                        </p>
                        <p className="tech">Beauty / Wellness</p>
                      </li>

                      <li
                        onClick={() => handleItemClick("Pet")}
                        style={{
                          border:
                            formData.selectedItem === "Pet"
                              ? "1px solid #fff"
                              : "none",
                          cursor: "pointer",
                        }}
                      >
                        <p>
                          <img
                            src={Uns}
                            alt="not found"
                            className="img-fluid"
                          />
                        </p>
                        <p className="tech">Pets</p>
                      </li>

                      <li
                        onClick={() => handleItemClick("Kids")}
                        style={{
                          border:
                            formData.selectedItem === "Kids"
                              ? "1px solid #fff"
                              : "none",
                          cursor: "pointer",
                        }}
                      >
                        <p>
                          <img
                            src={Uns}
                            alt="not found"
                            className="img-fluid"
                          />
                        </p>
                        <p className="tech">Children</p>
                      </li>

                      <li
                        onClick={() => handleItemClick("Home")}
                        style={{
                          border:
                            formData.selectedItem === "Home"
                              ? "1px solid #fff"
                              : "none",
                          cursor: "pointer",
                        }}
                      >
                        <p>
                          <img
                            src={Uns}
                            alt="not found"
                            className="img-fluid"
                          />
                        </p>
                        <p className="tech">Home</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
