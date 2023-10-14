import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo1 from "../Asset/Images/Gp.png";
import "../Asset/App.css";
import { useNavigate } from "react-router-dom";
import LoaderComponet from './LoderComponent'
export default function ProductImport() {
  axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        selectedItem: "",   
      });

      const handleChange = (e) => {
        const { name, type, checked } = e.target;
    
        // setSelectedThumbnail(e.target.value);
        if (type === "checkbox") {
          setFormData({
            ...formData,
            [name]: checked,
            [name === "importProduct"
              ? "notImportProduct"
              : "importProduct"]: false,
          });
        } 
      };
      useEffect(()=>{
        (async()=>{
          setLoading(true);
          const response = await axios.get(`http://localhost:3010/dashboard`);
          console.log(response);
                  if(response.data ==="Success")
                  {
                    setLoading(false);
                    navigate('/product-import')
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
        .post("http://localhost:3010/api/products", formData)
        .then((response) => {
          console.log(response);
          if(response.status === 200)
          {
            setLoading(false);
            navigate('/create-store')
          }
          
          console.log("Data saved successfully");
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
          navigate('/theme')
          console.log("Error saving data");
        });
      };

  return (
    <div className="content  container-fluid">
        {loading ? (
          <LoaderComponet loading/>
      ):(" ")}
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
                          <a href="/">Create</a>
                        </button> */}
                </div>
              </div>
            </div>
            <h1 className="col-md-12 d-flex flex-column text-white align-items-center justify-content-center">
              DO You Want To Import The Products?
            </h1>
          </div>
          <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="checkbox"
                  name="importProduct"
                  checked={formData.importProduct}
                  onChange={handleChange}
                  style={{ transform: "scale(2)" }}
                  className="m-3"
                />
                YES
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="notImportProduct"
                  checked={formData.notImportProduct}
                  onChange={handleChange}
                  style={{ transform: "scale(2)" }}
                  className="m-3"
                />
                No
              </label>
            </form>
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
