
import ModalMenu from "../../components/UI/ModalMenu";
import Header from "./Header/Header";
import styles from "./layout.module.css"
const LayoutTwo = ({children}) => {
    return ( <div className={styles.containerLayout} >
        <Header />
   <ModalMenu />
        {children}

        
    </div> );
}
 
export default LayoutTwo;