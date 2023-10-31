import { useEffect } from "react";

const Gallery = ({ selectedImages, setSelectedImages, images, setImages }) => {
  console.log(selectedImages);
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
  }, [setImages]);

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

  const handleCheckboxChange = (event, index) => {
    let _selectedImages = [...selectedImages];

    if (event.target.checked) {
      _selectedImages.push(index);
    } else {
      _selectedImages = _selectedImages.filter((image) => image !== index);
    }

    console.log(_selectedImages);

    setSelectedImages(_selectedImages);
  };

  return (
    <div className="px-10 py-5 grid grid-cols-5 gap-5">
      {images &&
        images.map((image, index) => (
          <div
            style={{
              backgroundImage: `url('${image}')`,
            }}
            className={`w-full aspect-square border border-gray-400 rounded-lg first-of-type:col-span-2 first-of-type:row-span-2 bg-no-repeat bg-cover bg-center relative group/image`}
            key={image}
          >
            <div className="absolute inset-0 hover:bg-black opacity-0 hover:opacity-50 cursor-pointer z-20"></div>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, index)}
              className={`absolute top-6 left-6 w-6 aspect-square ${
                selectedImages.includes(index) || "hidden"
              } group-hover/image:inline cursor-pointer z-30`}
            />
          </div>
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
