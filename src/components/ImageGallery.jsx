import useImage from "../hooks/useImage";
import ImageGrid from "./ImageGrid";
import Topbar from "./Topbar";

const ImageGallery = () => {
  const [images, setImages] = useImage();

  return (
    <div className="bg-white rounded-sm shadow">
      <Topbar images={images} setImages={setImages} />
      <ImageGrid images={images} setImages={setImages} />
    </div>
  );
};

export default ImageGallery;
