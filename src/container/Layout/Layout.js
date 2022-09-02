import Backdrop from "../../components/UI/BackDrop";
import ModalMenu from "../../components/UI/ModalMenu";
import { useModal } from "../../Provider/ModalNavProvider";
import Footer from "./FooterPage/FooterPage";
import Header from "./Header/Header";
import styles from "./layout.module.css"
const Layout = ({children}) => {
    const modalState = useModal()
    console.log(modalState)
    return ( <div className={styles.containerLayout}>
        <Header />
    <ModalMenu/>
  
        {children}

        <Footer />
    </div> );
}
 
export default Layout;