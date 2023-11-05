import { BsImages } from "react-icons/bs";

const AddImagesInput = ({ handleChange }) => {
  return (
    <div className="w-full bg-red-50 shadow aspect-square border-dashed border bg-opacity-30 border-gray-400 flex flex-col items-center justify-center gap-2 rounded-lg relative">
      <input
        multiple
        type="file"
        accept="image/*"
        className="absolute inset-0 z-10 opacity-0 cursor-pointer"
        onChange={handleChange}
        // To reset the input's value and trigger the onchange event even if the same path is selected
        onClick={(e) => (e.target.value = null)}
      />
      <BsImages className="text-2xl" />
      <p className="text-center font-semibold text-lg">Add Images</p>
    </div>
  );
};

export default AddImagesInput;
