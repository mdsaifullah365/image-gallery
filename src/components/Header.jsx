const Header = ({ selectedImages }) => {
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
          <p className="font-bold text-red-400">Delete files</p>
        )}
      </div>
    </div>
  );
};

export default Header;
