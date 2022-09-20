const Container = ({ children, className }) => {
  return (
    <div
      className={` ${className} max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 `}
    >
      {children}
    </div>
  );
};

export default Container;
