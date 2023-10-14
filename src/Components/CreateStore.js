import React from 'react'
import Logo1 from "../Asset/Images/Gp.png";
import { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Asset/App.css";
import LoaderComponet from './LoderComponent'

export default function CreateStore() {
  axios.defaults.withCredentials = true;
    const [formData, setFormData] = useState({
        storeName:"",
      });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleBtnClick = () => {
        redirectToAnotherUrl();
        
      };

      const redirectToAnotherUrl = () => {
        const newTab = window.open(
          "https://www.shopify.com/in/free-trial/3-steps?term=shopify%20store%20create&adid=566014743789&campaignid=15433369407&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwx5qoBhDyARIsAPbMagDzeSd67y_lNIR5KfkCo0wbFWv3Y08p-uooIyYWLWz7BvF6ByjspAsaAt52EALw_wcB&cmadid=516585705;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324494758;cmcreativeid=163722649;cmsiteid=5500011",
          "_blank"
        );
        newTab.focus();
      };
      useEffect(()=>{
        (async()=>{
          setLoading(true);
          const response = await axios.get(`http://localhost:3010/dashboard`);
          console.log(response);
                  if(response.data ==="Success")
                  {
                    setLoading(false);
                    navigate('/create-store')
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
        .post("http://localhost:3010/api/store", formData)
        .then((response) => {
          console.log(response);
          if(response.status === 200)
          {
            setLoading(false);
            navigate('/info-page')
          }
          
          console.log("Data saved successfully");
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
          navigate('/product-import')
          console.log("Error saving data");
        });
      };

  return (
    <div className="content">
        {loading ? (
          <LoaderComponet loading/>
      ):(" ")}
      <div className="container">
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
                          <a href="/">Create</a>
                        </button> */}
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <p className="choose">#4 Next Steps:</p>
                </div>
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary" onClick={handleBtnClick}>
                  Create Store
                </button>
              </div>

              <div className="row pt-3">
                <div className="col-md-6">
                  <div className="box-outer1">
                    <ul>
                      <li>
                        Click on <b>“Create Store”</b> Button First
                      </li>
                      <li>Fill in the field with your best email</li>
                      <li>Complete registration information</li>
                      <li>Copy Your Store name from URL Address</li>
                      <li>Return to this tab</li>
                      <li>Paste the Store name in the field below</li>
                      <li>Click on the Next button</li>
                    </ul>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="btn btn-primary w-100"
                      name="store_name"
                      id="store"
                      placeholder="Enter Store Name Here"
                      value={formData.storeName}
                      onChange={(event) => {
                        setFormData({
                          ...formData,
                          storeName: event.target.value,
                        });
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box-outer1">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/ZIQK7kZIGQg?si=OpFCqPMJGGqhFGla"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-md-8"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 text-left store-btn-outer pb-3">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
