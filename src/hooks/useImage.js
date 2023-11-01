import { useEffect, useState } from "react";

const useImage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        (async () => {
        let _images = [];

        for (let i = 1; i <= 9; i++) {
            _images.push(import(`/src/assets/images/image-${i}.webp`));
        }

        _images = await Promise.all(_images);
        _images = _images.filter((image) => image.default);
        _images = _images.map((image) => image.default);

        setImages(_images);
        })();
    }, [setImages]);

    return [images, setImages];
}

export default useImage;