import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#9f1239",
};

function Spinner({loading}) {
//   let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#e11d48");

  return (
    <div className="sweet-loading">

      <ClipLoader
        color="#9f1239"
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