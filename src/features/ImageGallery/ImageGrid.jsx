import { useContext } from "react";
import AddImagesInput from "../../components/inputs/AddImagesInput";
import ImageContext from "../../contexts/ImageContext";
import { ImageCard } from "./index";

const ImageGrid = () => {
  const [images, setImages] = useContext(ImageContext);

  const handleDrop = (e, targetImageIndex) => {
    e.preventDefault();
    const draggedImageIndex = e.dataTransfer.getData("imageIndex"); // get dragged image index in dataTransfer object

    let _images = [...images];

    const [draggedImage] = _images.splice(draggedImageIndex, 1); // remove dragged image from it's current index
    _images.splice(targetImageIndex, 0, draggedImage); // add the removed image at the target index
    setImages(_images);
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
          handleDragStart={(e) => e.dataTransfer.setData("imageIndex", index)}
          handleDragOver={(e) => e.preventDefault()}
          handleDrop={(e) => handleDrop(e, index)}
        />
      ))}

      {/* Add Images Input */}
      <AddImagesInput handleChange={handleFileChange} />
    </div>
  );
};

export { ImageGrid };
