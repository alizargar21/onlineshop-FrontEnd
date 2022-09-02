import { createContext, useReducer, useContext } from "react";


const ModalContext = createContext();
const ModalContextDispatcher = createContext();

const initialState = false
const ModalReducer = (state, action) => {
  switch (action.type) {
    case "MODAL_OPEN":
      return true
    case "MODAL_CLOSE":
      return false
    default:
      return state.isOpen;
  }
};
const ModalProvider = ({ children }) => {
  const [isOpen, dispatch] = useReducer(ModalReducer, initialState);
  return (
    <ModalContext.Provider value={isOpen}>
      <ModalContextDispatcher.Provider value={dispatch}>
        {children}
      </ModalContextDispatcher.Provider>
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModal = () => useContext(ModalContext)
export const useModalActions = () => useContext(ModalContextDispatcher)
