import {React,  useState } from 'react';
import axios from 'axios';


const themesToUpload = [
  {
    name: "Beauty",
    src: "http://ai-accelerator.io/themes/beauty.zip",
    role: "unpublished"
  },
    {
    name: "Fitness",
    src: "http://ai-accelerator.io/themes/fitness.zip",
    role: "unpublished"
  },
  {
    name: "Theme3 Home",
    src: "http://ai-accelerator.io/themes/home.zip",
    role: "unpublished"
  },
  {
    name: "Kids",
    src: "http://ai-accelerator.io/themes/kids.zip",
    role: "unpublished"
  },
  {
    name: "Pet",
    src: "http://ai-accelerator.io/themes/pet.zip",
    role: "unpublished"
  },
  {
    name: "Tech",
    src: "http://ai-accelerator.io/themes/tech.zip",
    role: "unpublished"
  }
  
];

function ThemeSelector() {
    const [selectedThumbnail, setSelectedThumbnail] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(null);

  
     const isSelected = (value) => {
       return selectedThumbnail === value;
     };


  const handleThemeSelect = (themeIndex) => {
    setSelectedTheme(themesToUpload[themeIndex]);
  };

  const handleAssignMainTheme = () => {
    if (selectedTheme) {
      // Send the selected theme to the backend
      axios.post('http://localhost:5001/api/assign-main-theme', selectedTheme)
        .then((response) => {
          console.log(response.data);
          // Handle success, maybe show a success message to the user
        })
        .catch((error) => {
          console.error(error);
          // Handle error, maybe show an error message to the user
        });
    } else {
      // Handle case where no theme is selected
      alert('no theme selected... please select the theme..');
    }
  };

  return (
    <div>
      <h1>Select the main theme:</h1>
      <div>
        {themesToUpload.map((theme, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="mainTheme"
                value={index}
                onChange={() => handleThemeSelect(index)}
              />

              {theme.name}
            </label>
          </div>
        ))}
      </div>

   
      <button onClick={handleAssignMainTheme}>Assign Main Theme</button>
    </div>
  );
}

export default ThemeSelector;
