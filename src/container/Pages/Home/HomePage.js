import Layout from "../../Layout/Layout";
import Landing from "../../../components/Landing/Landing";
import OfferBox from "../../../components/OfferBox/OfferBox";
import Possibilities from "../../../components/Possibilities/Possibilities";



const HomePage = ({products}) => {

    

  return (
    <Layout>
      <Landing />
      <Possibilities />
   
   <OfferBox  products={products} /> 

      {/* <BannerComponent/> */}
      {/* <BannerComponent/> */}
    </Layout>
  );
};

export default HomePage;
