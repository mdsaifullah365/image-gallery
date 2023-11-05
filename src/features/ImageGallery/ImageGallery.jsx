import ImageContext from "../../contexts/ImageContext";
import useImage from "../../hooks/useImage";
import { GalleryHeader, ImageGrid } from "./index";

const ImageGallery = () => {
  const imageState = useImage();

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
