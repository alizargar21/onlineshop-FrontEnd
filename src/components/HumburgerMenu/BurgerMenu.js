import React, { useEffect } from "react";
import "./burgerMenu.css";
import { useRef } from "react";
import { useModalActions, useModal } from "../../Provider/ModalNavProvider";
const BurgerMenu = () => {
  const burgerRef = useRef();
  const modalState = useModal();
  const dispatch = useModalActions();
  useEffect(() => {
    modalState ?  burgerRef.current.classList.add("change") : burgerRef.current.classList.remove("change");
    // modalState && burgerRef.current.classList.toggle("change");
    console.log("useEffect" ,modalState)
  }, [modalState]);
  const clickHandler = () => {
    burgerRef.current.classList.toggle("change");
    modalState
      ? dispatch({ type: "MODAL_CLOSE" })
      : dispatch({ type: "MODAL_OPEN" });
  };
  return (
    <div className="burger" ref={burgerRef} onClick={() => clickHandler()}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default BurgerMenu;
