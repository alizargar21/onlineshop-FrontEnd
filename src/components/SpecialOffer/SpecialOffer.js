import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../../common/Spinner/Spinner";
import SpecialOfferBox from "./SpecialOfferBox/SpecialOfferBox";

const SpecialOffer = ({data , loading}) => {
  const [specialOffer , setSpecialOffer] = useState([])
  useEffect(()=>{
      const product = data.filter(item => item.discount >= 20)
      setSpecialOffer(product)
  },[])
    
  return (
    <section className="w-[90%] sm:w-full center h-[250px] lg:flex-col lg:h-auto   mx-auto my-5 rounded-lg">
      {loading && <Spinner />}
 {specialOffer && specialOffer.map(item => (<SpecialOfferBox key={item._id} image={item.image} discount={item.discount} title={`The Best Price For ${item.name} `}/>))}
    </section>
  );
};

export default SpecialOffer;
