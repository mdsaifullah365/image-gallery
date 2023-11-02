import { useState } from "react";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import DeleteModal from "./DeleteModal";

const Topbar = ({ selectedImages, setSelectedImages, images, setImages }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const selectedImagesLength = selectedImages.length;

  // Handler for deleting Selected Items
  const handleDelete = () => {
    const _images = images.filter(
      (image, index) => !selectedImages.includes(index)
    );

    setImages(_images);
    setSelectedImages([]);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center px-5 shadow h-12 md:h-16">
      {/* Title */}
      <h1 className="font-bold text-base md:text-lg lg:text-xl">
        Gallery Items
      </h1>

      {/* Show delete option when any items selected */}
      {selectedImagesLength === 0 || (
        <div className="flex items-center gap-4 md:gap-5">
          <p className="text-lg flex items-center gap-2">
            <BiSolidSelectMultiple className="text-green-500" />

            {/* Show the number of selected items */}
            <span>
              {selectedImagesLength}{" "}
              <span className="hidden md:inline">
                {/* Use plural when more than one items are selected */}
                File{selectedImagesLength > 1 && "s"} Selected{" "}
              </span>
            </span>
          </p>

          {/* Delete Button */}
          <MdDeleteSweep
            className="text-3xl md:text-4xl text-red-700 cursor-pointer hover:scale-125 transition-transform duration-100 ease-linear"
            onClick={() => setIsDeleteModalOpen(true)}
          />
        </div>
      )}

      {/* Delete Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        handleClose={() => setIsDeleteModalOpen(false)}
        handleDelete={handleDelete}
        selectedImagesLength={selectedImagesLength}
      />
    </div>
  );
};

export default Topbar;
