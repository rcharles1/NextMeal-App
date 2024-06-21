import React, { useState, useRef } from 'react';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-dashed border-2 border-gray-300 rounded-md bg-gray/35 p-10 text-center cursor-pointer"
      >
        {selectedImage ? (
          <img
            alt="Selected"
            width="250px"
            src={URL.createObjectURL(selectedImage)}
          />
        ) : (
          <p>Drag and drop your image here, or click to select files</p>
        )}
        {/* Display the "Choose File" button */}
        <input
          type="file"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className="mt-2 p-2 bg-bg_variant1/75 font-semibold rounded-lg text-pure_white"
        >
          Choose File
        </button>
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;