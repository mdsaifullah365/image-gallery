import { useContext, useState } from "react";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import DeleteModal from "../../components/modals/DeleteModal";
import ImageContext from "../../contexts/ImageContext";

const GalleryHeader = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [images] = useContext(ImageContext);

  // Calculate amount of total selected images
  const totalSelected = images.filter((image) => image.selected).length;

  return (
    <>
      <div className="bg-white bg-opacity-95 flex justify-between items-center px-5 shadow border-b border-gray-200 h-12 md:h-16 sticky top-0 z-40">
        {/* Title */}
        <h1 className="font-semibold text-base md:text-lg lg:text-xl">
          Gallery Items
        </h1>

        {/* Show delete option when any item is selected */}
        {totalSelected > 0 && (
          <div className="flex items-center gap-4 md:gap-5">
            <p className="text-lg flex items-center gap-2">
              <BiSolidSelectMultiple className="text-blue-500" />

              {/* Show how many items are selected */}
              <span>
                {totalSelected}{" "}
                <span className="hidden md:inline">
                  {/* Use plural when more than one items are selected */}
                  File{totalSelected > 1 && "s"} Selected{" "}
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
      </div>

      {/* Delete Modal */}
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
};

export { GalleryHeader };
