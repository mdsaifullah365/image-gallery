import SelectImageInput from "../../components/inputs/SelectImageInput";

const ImageCard = ({
  src,
  index,
  selected,
  handleDragStart,
  handleDragOver,
}) => {
  const style = {
    backgroundImage: `url('${src}')`,
  };

  return (
    <div
      draggable
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragOver}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      style={style}
      className={`w-full bg-white cursor-pointer hover:scale-[1.03] transition-transform duration-200 ease-out aspect-square shadow-xl hover:shadow-2xl rounded-lg first-of-type:col-span-2 first-of-type:row-span-2 first-of-type:shadow-2xl first-of-type:hover:scale-[.98] bg-no-repeat bg-cover bg-center relative group/image ${
        selected && "opacity-70 border-2 border-blue-400"
      }`}
    >
      {/* Image Selection Checkbox */}
      <SelectImageInput index={index} selected={selected} />
    </div>
  );
};

export { ImageCard };
