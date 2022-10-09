import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-w-lg  bg-gray-200 dark:bg-gray-800 min-h-screen">
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
