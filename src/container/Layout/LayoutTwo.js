import Header from "./Header/Header";

const LayoutTwo = ({ children }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 min-h-screen">
      <Header />
      {children}
    </div>
  );
};

export default LayoutTwo;
