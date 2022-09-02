import { useModalActions , useModal } from '../../Provider/ModalNavProvider';
import './uiStyles.css'
const Backdrop = () => {
    const modalState = useModal()
    const dispatch = useModalActions()
    const closeModalAndBurger = ()=> {
        dispatch({type:"MODAL_CLOSE"})
        
    }
    return ( modalState && <div className="backdrop" onClick={()=>dispatch({type:"MODAL_CLOSE"})}></div> );
}
 
export default Backdrop;