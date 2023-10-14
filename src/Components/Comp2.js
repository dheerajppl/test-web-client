import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const themesToUpload = [
  {
    name: "Beauty",
    src: "http://ai-accelerator.io/themes/beauty.zip",
    role: "unpublished",
  },
  {
    name: "Fitness",
    src: "http://ai-accelerator.io/themes/fitness.zip",
    role: "unpublished",
  },
  {
    name: "Home",
    src: "http://ai-accelerator.io/themes/home.zip",
    role: "unpublished",
  },
  {
    name: "Kids",
    src: "http://ai-accelerator.io/themes/kids.zip",
    role: "unpublished",
  },
  {
    name: "Pet",
    src: "http://ai-accelerator.io/themes/pet.zip",
    role: "unpublished",
  },
  {
    name: "Tech",
    src: "http://ai-accelerator.io/themes/tech.zip",
    role: "unpublished",
  },
];

function Comp2() {
  const [selectedTheme, setSelectedTheme] = useState(null);

  // Function to handle the theme selection
  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="row pt-3 pb-5">
      {themesToUpload.map((theme, index) => (
        <div className="col-md-4" key={index}>
          <div
            className={`box-outer pb-5 ${
              selectedTheme === theme ? "selected" : ""
            }`}
            onClick={() => handleThemeSelect(theme)}
          >
            <ul>
              <li>
                <p>
                  <img src={theme.src} alt={theme.name} className="img-fluid" />
                </p>
                <p className="tech">{theme.name}</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comp2;
