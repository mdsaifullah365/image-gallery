import { useEffect, useState } from "react";

const useImage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('/src/data/images.json');
            const images = await res.json();

            setImages(images);
        })();
    }, [setImages]);

    return [images, setImages];
}

export default useImage;