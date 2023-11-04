import { useContext } from "react";
import ImageContext from "../../contexts/ImageContext";
import Modal from "../../layouts/Modal";
import ButtonDanger from "../buttons/ButtonDanger";
import ButtonLight from "../buttons/ButtonLight";

const DeleteModal = ({ isDeleteModalOpen, handleClose }) => {
  const [images, setImages] = useContext(ImageContext);

  const totalSelected = images.filter((image) => image.selected).length;
  const item = totalSelected > 1 ? "these images" : "the image";

  // Handler for deleting Selected Items
  const handleDelete = () => {
    // Filter unselected images and keep these only
    const _images = images.filter((image) => !image.selected);

    setImages(_images);
    handleClose();
  };

  return (
    <Modal isOpen={isDeleteModalOpen} handleClose={handleClose}>
      <div className="bg-white rounded-lg p-5 max-w-xl shadow-2xl mx-5">
        {/* Modal Title */}
        <h2 className="font-bold text-2xl mb-4">
          Are you sure you want to delete {item}?
        </h2>

        {/* Modal Subtitle */}
        <p className="text-lg mb-5">
          This will delete {item} permanently. You cannot undo this action.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-5 justify-end">
          <ButtonLight onClick={handleClose}>Cancel</ButtonLight>
          <ButtonDanger onClick={handleDelete}>Delete</ButtonDanger>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
