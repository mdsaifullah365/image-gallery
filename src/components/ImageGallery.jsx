import { useState } from "react";
import Gallery from "./Gallery";
import Topbar from "./Topbar";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const [selectedImages, setSelectedImages] = useState([]);
  return (
    <div className="bg-white rounded-sm shadow">
      <Topbar
        images={images}
        setImages={setImages}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      />
      <Gallery
        images={images}
        setImages={setImages}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      />
    </div>
  );
};

export default ImageGallery;
