import Footer from "./FooterPage/FooterPage";
import Header from "./Header/Header";
const Layout = ({children}) => {
    return ( <div>
        <Header />
   
        {children}

        <Footer />
    </div> );
}
 
export default Layout;