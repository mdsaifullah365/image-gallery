const ButtonDanger = ({ children, ...props }) => {
  return (
    <button
      className="h-12 aspect-[3/1] text-white rounded-lg text-xl bg-red-700 hover:bg-red-900"
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonDanger;
