import "./uiStyles.css";
import { navItems } from "../../components/Navigation/Navigation";
import Backdrop from "./BackDrop";
import "../Navigation/navigation.css"
import { useModal, useModalActions } from "../../Provider/ModalNavProvider";
import { Link } from "react-router-dom";
const ModalMenu = ({click}) => {
  const modalState = useModal()


  const styleComing = {
    opacity:"1",
    transform:"scale(1)",

  }
  const styleOuting = {
    opacity: "0",
    transform:"scale(0)",
    // display:"none"
  }
  return (
    <>
    <div
      className="modal"
      // style={{ transform: modalState ? "translate(0)" : "translate(-100vw)" }}
      style={modalState ? styleComing : styleOuting}
    >
      <ul>
        {navItems.map((item , index) => (
          <Link to={item.to} key={index} className="link">
          
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
      <Backdrop />

   
    </>
  );
};

export default ModalMenu;
