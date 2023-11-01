const ButtonLight = ({ children, ...props }) => {
  return (
    <button
      className="h-12 aspect-[3/1] border border-gray-400 rounded-lg text-xl hover:border-2 text-gray-400 hover:text-black"
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonLight;
