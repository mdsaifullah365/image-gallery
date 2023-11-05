import { useEffect, useState } from "react";
import imageData from "../data/images";

const useImage = () => {
  const [images, setImages] = useState([]);

  // useEffect is used to load data from the server (in future)
  useEffect(() => {
    setImages(imageData);
  }, []);

  return [images, setImages];
};

export default useImage;
