import { useEffect, useState } from "react";

const Gallery = () => {
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

      console.log(_images);
      setImages(_images);
    })();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      // File is an image
      const _images = [...images];
      _images.push(URL.createObjectURL(file));
      setImages(_images);
    } else {
      // File is not an image
      alert("Please select a valid image file.");
    }
  };

  return (
    <div className="px-10 py-5 grid grid-cols-5 gap-5">
      {images &&
        images.map((image) => (
          <div
            style={{
              backgroundImage: `url('${image}')`,
            }}
            className={`w-full aspect-square border border-gray-400 rounded-lg first-of-type:col-span-2 first-of-type:row-span-2 bg-no-repeat bg-cover bg-center`}
            key={image}
          ></div>
        ))}

      <div className="w-full aspect-square border-dashed border border-gray-400 flex items-center justify-center rounded-lg relative">
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className="absolute inset-0 z-10 opacity-0"
          onChange={handleFileChange}
        />
        <p className="text-center">Add Image</p>
      </div>
    </div>
  );
};

export default Gallery;
