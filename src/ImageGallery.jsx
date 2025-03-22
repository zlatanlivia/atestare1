import React, { useState, useEffect } from "react";
import question from "./assets/question.svg";
import imagesData from "./data/images.json";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setImages(imagesData);
  }, []);

  const handleSelectImage = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <div className="image-list">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={selectedIndex === index ? image.url : question}
            alt="Gallery Item"
            className={`${selectedIndex === index ? "selected" : ""}`}
            onClick={() => handleSelectImage(index)}
            style={{
              cursor: "pointer",
              width: "150px",
              margin: "50px",
              border:
                selectedIndex === index
                  ? "2px solid blue"
                  : "2px solid transparent",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

