import { useState } from "react";
import DraggableImage from "./DraggableImage";

const ImageGrid = ({
  selectedImages,
  setSelectedImages,
  images,
  setImages,
}) => {
  const [draggedImageIndex, setDraggedImageIndex] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      // File is an image
      const _images = [...images];
      _images.push(URL.createObjectURL(file));
      setImages(_images);
    } else {
      // File is not an image
      alert("Please select a valid image file.");
    }
  };

  const toggleImageSelection = (event, index) => {
    let _selectedImages = [...selectedImages];

    if (event.target.checked) {
      _selectedImages.push(index);
    } else {
      _selectedImages = _selectedImages.filter((image) => image !== index);
    }

    console.log(_selectedImages);

    setSelectedImages(_selectedImages);
  };

  const handleImageReorder = (startIndex, endIndex) => {
    const updatedImages = [...images];
    const [draggedImage] = updatedImages.splice(startIndex, 1);
    updatedImages.splice(endIndex, 0, draggedImage);
    setImages(updatedImages);
  };

  const handleDragStart = (e, index) => {
    setDraggedImageIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (draggedImageIndex !== index) {
      handleImageReorder(draggedImageIndex, index);
      setDraggedImageIndex(index);
    }
  };

  return (
    <div className="px-10 py-5 grid grid-cols-5 gap-5 image-container">
      {images &&
        images.map((src, index) => (
          <DraggableImage
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            index={index}
            src={src}
            toggleImageSelection={toggleImageSelection}
            selectedImages={selectedImages}
            key={src}
          />
        ))}

      <div className="w-full aspect-square border-dashed border border-gray-400 flex items-center justify-center rounded-lg relative">
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className="absolute inset-0 z-10 opacity-0"
          onChange={handleFileChange}
        />
        <p className="text-center">Add Image</p>
      </div>
    </div>
  );
};

export default ImageGrid;
