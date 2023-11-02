const DraggableImage = ({
  src,
  handleDragStart,
  handleDragOver,
  toggleImageSelection,
  selected,
}) => {
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      style={{
        backgroundImage: `url('${src}')`,
      }}
      className="w-full aspect-square border border-gray-400 rounded-lg first-of-type:col-span-2 first-of-type:row-span-2 bg-no-repeat bg-cover bg-center relative group/image"
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0 hover:bg-black opacity-0 hover:opacity-50 cursor-pointer z-20"></div>

      {/* Image Selection Checkbox */}
      <input
        type="checkbox"
        onChange={toggleImageSelection}
        className={`${
          selected || "hidden" // Hide the checkbox if not selected and not hovered
        } absolute top-6 left-6 w-6 aspect-square group-hover/image:inline cursor-pointer z-30`}
      />
    </div>
  );
};

export default DraggableImage;
