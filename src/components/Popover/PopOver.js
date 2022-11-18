import { useState } from "react";


const PopOver = ({ title, content, stylesPopup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div type="button" onMouseEnter={togglePopup}>
        {title}
      </div>
      {isOpen && (
        <Popup
          togglePopup={togglePopup}
          content={content}
          stylesPopup={stylesPopup}
        />
      )}
    </div>
  );
};

export default PopOver;

const Popup = ({ content, togglePopup , stylesPopup }) => {
  return (
    <div  onMouseLeave={togglePopup}  className={stylesPopup}>
      {content}
      <button onClick={togglePopup} className="absolute top-2 left-2 dark:text-gray-300">
        X
      </button>
    </div>
  );
};
