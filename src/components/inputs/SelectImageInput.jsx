import { useContext } from "react";
import ImageContext from "../../contexts/ImageContext";

const SelectImageInput = ({ index, selected }) => {
  const [images, setImages] = useContext(ImageContext);

  const toggleImageSelection = (e, index) => {
    let _images = [...images];
    _images[index].selected = e.target.checked; // Toggle 'selected' property (true/false) for the image using checkbox
    setImages(_images);
  };

  return (
    <input
      type="checkbox"
      value={selected}
      onChange={(e) => toggleImageSelection(e, index)}
      className={`${
        selected || "hidden" // Hide the checkbox if not selected and not hovered
      } group-hover/image:inline absolute top-6 left-6 w-6 aspect-square cursor-pointer z-30`}
    />
  );
};

export default SelectImageInput;
