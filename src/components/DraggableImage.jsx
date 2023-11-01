import { useState } from "react";

const DraggableImage = ({
  handleDragStart,
  handleDragOver,
  index,
  src,
  toggleImageSelection,
  selectedImages,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <div
      draggable
      onDragStart={(e) => {
        handleDragStart(e, index);
        setIsDragging(true);
      }}
      onDragEnd={() => {
        setIsDragging(false);
      }}
      onDragOver={(e) => handleDragOver(e, index)}
      style={{
        backgroundImage: `url('${src}')`,
      }}
      className={`w-full aspect-square border border-gray-400 rounded-lg first-of-type:col-span-2 first-of-type:row-span-2 bg-no-repeat bg-cover bg-center relative group/image ${
        isDragging ? "opacity-10" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 hover:bg-black opacity-0 hover:opacity-50 cursor-pointer z-20"></div>
      <input
        type="checkbox"
        onChange={(e) => toggleImageSelection(e, index)}
        className={`absolute top-6 left-6 w-6 aspect-square ${
          selectedImages.includes(index) || "hidden"
        } group-hover/image:inline cursor-pointer z-30`}
      />
    </div>
  );
};

export default DraggableImage;
