import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const BackArrowComponent = () => {
  let navigate = useNavigate();
  const backHandler = ()=> navigate(-1)

  return (
    <div className="relative">
      <button type="button" onClick={()=>{backHandler()}}>
        <BiArrowBack className="text-2xl text-primary dark:text-primary-dark absolute top-3 left-3" />
      </button>
    </div>
  );
};

export default BackArrowComponent;
