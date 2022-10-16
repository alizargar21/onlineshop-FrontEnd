import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BackArrowComponent from "../../common/BackArrow/BackArrow";
import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const location = useLocation(
  )
   console.log(location)
  return (
    <div className="min-w-lg  bg-gray-200 dark:bg-gray-800 min-h-screen">
      <Header />
  {  location.pathname !== "/"&&   <BackArrowComponent />}
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
