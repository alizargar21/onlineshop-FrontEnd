import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

function Spinner({loading}) {
//   let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("#202002");

  return (
    <div className="sweet-loading">

      <ClipLoader
        color="blue"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;