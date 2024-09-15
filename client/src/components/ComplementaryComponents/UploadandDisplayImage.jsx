import { useState, useRef } from 'react';

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
        className="border-dashed border-2 border-gray-300 rounded-md bg-gray/35 p-1  text-center cursor-pointer"
      >
        {selectedImage ? (
          <img
            alt="Selected"
            width="250px"
            src={URL.createObjectURL(selectedImage)}
            className="object-fill w-full"
          />
        ) : (
          <p>Drag and drop your image here, or <span 
          onClick={() => fileInputRef.current.click()} className="underline font-medium">click</span> to select files</p>
        )}
        <input
          type="file"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;