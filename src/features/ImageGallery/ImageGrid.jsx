import { useContext, useState } from "react";
import AddImagesInput from "../../components/inputs/AddImagesInput";
import ImageContext from "../../contexts/ImageContext";
import { ImageCard } from "./index";

const ImageGrid = () => {
  const [images, setImages] = useContext(ImageContext);
  const [draggedImageIndex, setDraggedImageIndex] = useState(null);

  const handleDragOver = (e, targetImageIndex) => {
    e.preventDefault();

    // If dragged image index and drop target index are not the same
    if (draggedImageIndex !== targetImageIndex) {
      // Handle Image Reorder
      const _images = [...images];
      const [draggedImage] = _images.splice(draggedImageIndex, 1); // Remove draggedImage from the startIndex (this will return the removed image)
      _images.splice(targetImageIndex, 0, draggedImage); // Add the dragged image at the endIndex
      setImages(_images);

      setDraggedImageIndex(targetImageIndex); // Select the dropped image as dragged index to enable resuming dragging
    }
  };

  const handleFileChange = (event) => {
    let files = Array.from(event.target.files);

    // Returns false if at least one file is not a valid image file
    const isFilesValid = files.every((file) => file.type.startsWith("image/"));

    if (isFilesValid) {
      // Generate array of objects from the selected images with src URLs
      files = files.map((file) => ({
        src: URL.createObjectURL(file),
      }));

      // Update images state with selected images
      const _images = [...images, ...files];
      setImages(_images);
    } else {
      // Show an alert if any of the images is not a valid image file
      alert("Please select valid image files.");
    }
  };

  return (
    <div className="p-3 lg:px-10 lg:py-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5 image-container bg-[#f9f9f9]">
      {images?.map(({ src, selected }, index) => (
        <ImageCard
          key={src}
          src={src}
          index={index}
          selected={selected}
          handleDragStart={() => setDraggedImageIndex(index)}
          handleDragOver={(e) => handleDragOver(e, index)}
        />
      ))}

      {/* Add Images Input */}
      <AddImagesInput handleChange={handleFileChange} />
    </div>
  );
};

export { ImageGrid };
