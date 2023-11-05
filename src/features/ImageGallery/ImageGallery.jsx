import { useState } from "react";
import ImageContext from "../../contexts/ImageContext";
import imageData from "../../data/images";
import { GalleryHeader, ImageGrid } from "./index";

const ImageGallery = () => {
  const imageState = useState(imageData);

  return (
    <ImageContext.Provider value={imageState}>
      <div className="bg-white rounded-sm shadow-2xl">
        <GalleryHeader />
        <ImageGrid />
      </div>
    </ImageContext.Provider>
  );
};

export { ImageGallery };
