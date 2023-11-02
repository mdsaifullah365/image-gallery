import { useEffect, useState } from "react";
import imageData from "../data/images";

const useImage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Code for loading data from the server

        setImages(imageData);
    }, [setImages]);

    return [images, setImages];
}

export default useImage;