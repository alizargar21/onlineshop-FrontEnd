import Footer from "./FooterPage/FooterPage";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-w-lg h-screen bg-gray-200 dark:bg-gray-800 min-h-screen">
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
