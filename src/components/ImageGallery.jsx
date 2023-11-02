import ImageContext from "../contexts/ImageContext";
import useImage from "../hooks/useImage";
import ImageGrid from "./ImageGrid";
import Topbar from "./Topbar";

const ImageGallery = () => {
  const imageState = useImage();

  return (
    <ImageContext.Provider value={imageState}>
      <div className="bg-white rounded-sm shadow-2xl">
        <Topbar />
        <ImageGrid />
      </div>
    </ImageContext.Provider>
  );
};

export default ImageGallery;
