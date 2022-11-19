import { useState } from "react";


const PopOver = ({ title, content, stylesPopup , headerTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div type="button" onMouseEnter={togglePopup}>
        {title}
      </div>
      {isOpen && (
        <Popup
          togglePopup={togglePopup}
          content={content}
          stylesPopup={stylesPopup}
          headerTitle={headerTitle}
        />
      )}
    </div>
  );
};

export default PopOver;

const Popup = ({headerTitle, content, togglePopup , stylesPopup }) => {
  return (
      <div  onMouseLeave={togglePopup}  className={stylesPopup}>
        <h2 className="mx-auto text-gray-700 dark:text-gray-300 center my-2">{headerTitle}</h2>
      {content}
      <button onClick={togglePopup} className="absolute top-2 left-2 dark:text-gray-300 text-gray-800">
        X
      </button>
    </div>
  );
};
