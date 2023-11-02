import { useContext, useState } from "react";
import ImageContext from "../contexts/ImageContext";
import DraggableImage from "./DraggableImage";

const ImageGrid = () => {
  const [draggedImageIndex, setDraggedImageIndex] = useState(null);
  const [images, setImages] = useContext(ImageContext);

  // Handler for Image Adding
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      // File is an image
      const _images = [...images];
      _images.push({ src: URL.createObjectURL(file) });
      setImages(_images);
    } else {
      // File is not an image
      alert("Please select a valid image file.");
    }
  };

  // Handler for toggling image selection
  const toggleImageSelection = (event, index) => {
    let _images = [...images];
    // Set 'selected' property true of false for a specific image
    _images[index].selected = event.target.checked;

    setImages(_images);
  };

  // Handler for Image Reordering
  const handleImageReorder = (startIndex, endIndex) => {
    const _images = [...images];

    // Remove draggedImage from the startIndex (this will return the removed image)
    const [draggedImage] = _images.splice(startIndex, 1);
    // Add the dragged image at the endIndex
    _images.splice(endIndex, 0, draggedImage);

    setImages(_images);
  };

  // Handle image reordering when drag over a target
  const handleDragOver = (e, index) => {
    e.preventDefault();

    // If dragged image index and drop target index are not the same
    if (draggedImageIndex !== index) {
      // Handle Image Reorder
      handleImageReorder(draggedImageIndex, index);
      // Select the dropped image as dragged image
      setDraggedImageIndex(index);
    }
  };

  return (
    <div className="px-10 py-5 grid grid-cols-5 gap-5 image-container">
      {/* Image Grid */}
      {images?.map(({ src, selected }, index) => (
        <DraggableImage
          key={src}
          src={src}
          handleDragStart={() => setDraggedImageIndex(index)}
          handleDragOver={(e) => handleDragOver(e, index)}
          toggleImageSelection={(e) => toggleImageSelection(e, index)}
          selected={selected}
        />
      ))}

      {/* Add Image Input */}
      <div className="w-full aspect-square border-dashed border border-gray-400 flex items-center justify-center rounded-lg relative">
        <input
          type="file"
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
