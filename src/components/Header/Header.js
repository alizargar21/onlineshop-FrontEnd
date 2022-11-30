import Navigation from "../Navigation/Navigation";
const Header = () => {
  return (
    <header className="sticky shadow-xl dark:shadow-2xl z-50 top-0 w-full h-20  bg-containerBG/90 dark:bg-black/50 backdrop-blur-sm flex justify-between items-center px-[50px] sm:px-[20px] ">
      <Navigation />
    </header>
  );
};

export default Header;
