const Header = ({ selectedImages, setSelectedImages, images, setImages }) => {
  const handleDelete = () => {
    const _images = images.filter(
      (image, index) => !selectedImages.includes(index)
    );

    console.log(_images);

    setImages(_images);
    setSelectedImages([]);
  };
  return (
    <div>
      <div className="flex justify-between items-center px-10 py-5 border-b border-gray-400">
        {selectedImages.length === 0 ? (
          <h1 className="font-bold text-3xl">Gallery</h1>
        ) : (
          <p className="font-bold text-xl">
            {selectedImages.length} File{selectedImages.length !== 1 && "s"}{" "}
            Selected
          </p>
        )}
        {selectedImages.length === 0 || (
          <button
            className="font-bold text-red-400 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg"
            onClick={handleDelete}
          >
            Delete files
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
