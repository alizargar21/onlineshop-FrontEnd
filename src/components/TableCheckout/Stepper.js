
import { useEffect } from "react";
import { BsCheck } from "react-icons/bs";
const Stepper = ({ complete  , currentStep  , steps }) => {


  return (
    <div className="center  w-[70%] mx-auto">
      <div className="center">
        {(steps || []).map((item, index) => (
          <div
            className={`step-item ${currentStep === index + 1 && "active"} ${
              (index + 1 < currentStep || complete) && "completed"
            } `}
            key={index}
          >
            <div className="step ">{(index + 1 < currentStep || complete) ?  <BsCheck size={20} /> : index + 1 }</div>
            <p className="dark:text-gray-200 text-gray-700 md:text-[10px]">{item.label}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Stepper;
